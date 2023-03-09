import ReservationsList from '@/components/Reservations/ReservationsList';
import ReservationsModal from '@/components/Reservations/ReservationsModal';
import { Center, Box } from '@chakra-ui/react';

const Reservations = () => {
  return (
    <>
      <Center>
        <Box maxWidth="container.sm" mx="auto" px={4}>
          <ReservationsList />
        </Box>
      </Center>

      <ReservationsModal />
    </>
  );
};
export default Reservations;
