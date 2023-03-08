import { HStack, Center } from '@chakra-ui/react';
import Filter from '@/components/Filter';
import ProductList from '@/components/ProductList';
import ProductModal from '@/components/ProductModal';

const Main = () => {
  return (
    <>
      <Filter />
      <Center as="main" bg="tomato" w="100%">
        <HStack as="section" bg="tomato" w="50%">
          <ProductList />
        </HStack>
      </Center>
      <ProductModal />
    </>
  );
};
export default Main;
