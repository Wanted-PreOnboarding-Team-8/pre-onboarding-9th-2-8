import { useEffect } from 'react';
import { Heading, VStack, VisuallyHidden } from '@chakra-ui/react';
import { getProducts } from '@/store/slices/productSlice';
import Product from '@/components/Product';
import { IProduct } from '@/interface/product';
import { RootState, useAppDispatch, useAppSelector } from '@/store';

const ProductList = () => {
  const dispatch = useAppDispatch();
  const {
    products: { products },
    filter: {
      byPrice: { minPrice, maxPrice },
      byLocation,
    },
  } = useAppSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filtering = (product: IProduct) => {
    if (
      Number(product.price) >= minPrice &&
      Number(product.price) <= maxPrice
    ) {
      if (byLocation === 'all') return true;
      else if (byLocation === product.spaceCategory) return true;
    }
  };

  return (
    <VStack as="section" bg="blue.100" w="75%" minW="500px" p={4}>
      <VisuallyHidden>
        <Heading>상품 정보</Heading>
      </VisuallyHidden>
      {products.filter(filtering).map((product: IProduct) => (
        <Product key={product.idx} {...product} />
      ))}
    </VStack>
  );
};
export default ProductList;
