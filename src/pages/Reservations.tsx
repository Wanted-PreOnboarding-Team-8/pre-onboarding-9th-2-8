import ProductModal from '@/components/ProductModal';
import { Center } from '@chakra-ui/react';
import CartList from '../components/CartList';

const Reservations = () => {
  return (
    <>
      <Center as="main" w="100%">
        <CartList />
      </Center>
      <ProductModal />
    </>
  );
};

export default Reservations;
