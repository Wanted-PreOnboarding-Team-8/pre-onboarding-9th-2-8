import { Center } from '@chakra-ui/react';
import ProductList from '@/components/ProductList';
import ProductModal from '@/components/ProductModal';

const Main = () => {
  return (
    <>
      <Center as="main" bg="tomato" w="100%">
        <ProductList />
      </Center>
      <ProductModal />
    </>
  );
};
export default Main;
