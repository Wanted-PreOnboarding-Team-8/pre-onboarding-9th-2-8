import { Box, Center } from '@chakra-ui/react';
import ProductList from '@/components/Product/ProductList';
import ProductModal from '@/components/Product/ProductModal';

const Main = () => {
  return (
    <>
      <Center>
        <Box maxWidth="container.sm" mx="auto" px={4}>
          <ProductList />
        </Box>
      </Center>

      <ProductModal />
    </>
  );
};
export default Main;
