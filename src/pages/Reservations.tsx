import ProductModal from '@/components/Product/ProductModal';
import ReservationsList from '@/components/Reservations/ReservationsList';
import { Center, Box } from '@chakra-ui/react';

const Reservations = () => {
  return (
    <>
      <Center>
        <Box maxWidth="container.sm" mx="auto" px={4}>
          <ReservationsList />
        </Box>
      </Center>

      <ProductModal />
    </>
  );
};
export default Reservations;
