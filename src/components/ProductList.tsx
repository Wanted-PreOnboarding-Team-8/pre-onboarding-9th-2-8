import { useEffect } from 'react';
import { Heading, VStack, VisuallyHidden, Text } from '@chakra-ui/react';
import { getProducts } from '@/store/slices/productSlice';
import Product from '@/components/Product';
import { IProduct } from '@/interface/product';
import { RootState, useAppDispatch, useAppSelector } from '@/store';

const ProductList = () => {
  const dispatch = useAppDispatch();
  const {
    products: { products },
  } = useAppSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <VStack as="section" w="75%" minW="500px" p={4}>
      <VisuallyHidden>
        <Heading>상품 정보</Heading>
      </VisuallyHidden>
      {products.length ? (
        products.map((product: IProduct) => (
          <Product key={product.idx} {...product} />
        ))
      ) : (
        <Text>상품 결과 없음</Text>
      )}
    </VStack>
  );
};
export default ProductList;
