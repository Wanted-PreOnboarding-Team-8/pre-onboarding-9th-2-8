import { VStack, Center } from '@chakra-ui/react';
import ProductList from '@/components/ProductList';
import ProductModal from '@/components/ProductModal';
import Nav from '@/components/Nav';

const Main = () => {
  return (
    <>
      <Center as="main" bg="tomato" w="100%">
        <VStack as="section" bg="tomato" w="50%">
          <Nav />
          <ProductList />
        </VStack>
      </Center>
      <ProductModal />
    </>
  );
};
export default Main;
