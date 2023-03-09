import CartList from '@/components/CartList';
import Nav from '@/components/Nav';
import ProductModal from '@/components/ProductModal';
import { Center, VStack } from '@chakra-ui/react';

const Reservations = () => {
  return (
    <>
      <Center as="main" bg="tomato" w="100%">
        <VStack as="section" bg="tomato" w="50%">
          <Nav />
          <CartList />
        </VStack>
      </Center>
      <ProductModal />
    </>
  );
};
export default Reservations;
