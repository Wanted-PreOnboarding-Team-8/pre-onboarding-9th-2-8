import { HStack, Center } from '@chakra-ui/react';
import ProductList from '@/components/ProductList';

const Reservations = () => {
  return (
    <>
      <Center as="main" bg="tomato" w="100%">
        <HStack as="section" bg="tomato" w="50%">
          <ProductList pageName="reservations" />
        </HStack>
      </Center>
    </>
  );
};
export default Reservations;
