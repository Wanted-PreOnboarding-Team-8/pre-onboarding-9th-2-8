import { useEffect, useState } from 'react';
import { IProduct } from './type';
import { getProducts } from '@/api/product';
import { Heading, SimpleGrid, Box } from '@chakra-ui/react';
import ProductItem from '@/components/product/ProductItem';

const ProductPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <Box>
      <Heading>여행 상품 목록</Heading>
      <SimpleGrid>
        {products.map((product) => (
          <ProductItem key={product.idx} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductPage;
