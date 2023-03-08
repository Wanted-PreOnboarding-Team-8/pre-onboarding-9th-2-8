import { useEffect, useMemo } from 'react';
import { Heading, VStack, VisuallyHidden } from '@chakra-ui/react';
import { getProducts } from '@/store/slices/productSlice';
import Product from '@/components/Product';
import { IProduct } from '@/interface/product';
import { RootState, useAppDispatch, useAppSelector } from '@/store';
import Filter from './Filter';

const ProductList = () => {
  const dispatch = useAppDispatch();
  const {
    products: { products },
    filter: { options },
  } = useAppSelector((state: RootState) => state);

  const filteredProducts = useMemo(
    () =>
      products.filter((product) =>
        options.every((option) => {
          switch (option.type) {
            case 'space':
              if (!option.value.length) return true;
              return option.value.includes(product.spaceCategory);
            case 'price':
              return (
                option.value[0] <= Number(product.price) &&
                Number(product.price) <= option.value[1]
              );
          }
        }),
      ),
    [products, options],
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <VStack as="section" bg="blue.100" w="75%" minW="500px" p={4}>
      <VisuallyHidden>
        <Heading>상품 정보</Heading>
      </VisuallyHidden>
      <Filter />
      {filteredProducts.map((product: IProduct) => (
        <Product key={product.idx} {...product} />
      ))}
    </VStack>
  );
};
export default ProductList;
