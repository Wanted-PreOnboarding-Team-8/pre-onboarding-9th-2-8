import { useEffect } from 'react';
import { getProducts } from '@/store/slices/productSlice';
import Product from '@/components/Product';
import { IProduct } from '@/interface/product';
import { RootState, useAppDispatch, useAppSelector } from '@/store';
import Filter from './Filter';
import Loading from './Loading';
import { Text } from '@chakra-ui/react';

const ProductList = () => {
  const dispatch = useAppDispatch();
  const {
    products: { products, isLoading, error },
  } = useAppSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Filter />
      {isLoading ? (
        <Loading text="데이터 로딩중..." />
      ) : (
        products.map((product: IProduct) => (
          <Product key={product.idx} {...product} />
        ))
      )}
      {error && <Text>{error}</Text>}
    </>
  );
};
export default ProductList;
