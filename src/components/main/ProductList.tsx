import { useEffect } from 'react';
import { Heading, VStack, VisuallyHidden, Text } from '@chakra-ui/react';
import { getProducts } from '@/store/slices/productSlice';
import { IProduct } from '@/interface/product';
import { RootState, useAppDispatch, useAppSelector } from '@/store';
import Product from './Product';

const ProductList = () => {
  const dispatch = useAppDispatch();
  const {
    products: { products },
  } = useAppSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <VStack as="section" bg="blue.100" w="75%" minW="500px" p={4}>
      <VisuallyHidden>
        <Heading>상품 정보</Heading>
      </VisuallyHidden>
      {products.length > 0 ? (
        products.map((product: IProduct) => (
          <Product key={product.idx} {...product} />
        ))
      ) : (
        <Text>검색 결과가 없습니다</Text>
      )}
    </VStack>
  );
};
export default ProductList;
