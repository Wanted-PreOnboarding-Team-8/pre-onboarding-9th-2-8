import { HStack, VStack, Center } from '@chakra-ui/react';
import Filter from '@/components/Filter';
import ProductList from '@/components/ProductList';
import ProductModal from '@/components/ProductModal';

const Main = () => {
  return (
    <>
      <Center as="main" bg="tomato" w="100%">
        <VStack>
          <Filter />
          <HStack as="section" bg="tomato" w="50%">
            <ProductList />
          </HStack>
        </VStack>
      </Center>
      <ProductModal />
    </>
  );
};
export default Main;
