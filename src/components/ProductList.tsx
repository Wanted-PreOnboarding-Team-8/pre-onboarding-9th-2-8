import { useEffect } from 'react';
import { getProducts } from '@/store/slices/productSlice';
import Product from '@/components/Product';
import { IProduct } from '@/interface/product';
import { RootState, useAppDispatch, useAppSelector } from '@/store';
import Filter from './Filter';

const ProductList = () => {
  const dispatch = useAppDispatch();
  const {
    products: { products },
  } = useAppSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Filter />
      {products.map((product: IProduct) => (
        <Product key={product.idx} {...product} />
      ))}
    </>
  );
};
export default ProductList;
