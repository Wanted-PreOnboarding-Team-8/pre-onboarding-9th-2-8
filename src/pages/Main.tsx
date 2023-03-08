import { Center, Box } from '@chakra-ui/react';
import Filter from '@/components/Filter';
import ProductList from '@/components/ProductList';
import ProductModal from '@/components/ProductModal';

const Main = () => {
  return (
    <>
      <Center as="main" w="100%">
        <Box as="section" w="50%">
          <Filter />
          <ProductList />
        </Box>
      </Center>
      <ProductModal />
    </>
  );
};
export default Main;
