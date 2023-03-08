import { HStack, Center } from '@chakra-ui/react';
import Filter from '@/components/main/Filter';
import ProductList from '@/components/main/ProductList';
import ProductModal from '@/components/main/ProductModal';

const Main = () => {
  return (
    <>
      <Center as="main" bg="tomato" w="100%">
        <HStack as="section" bg="tomato" w="50%">
          <Filter />
          <ProductList />
        </HStack>
      </Center>
      <ProductModal />
    </>
  );
};
export default Main;
