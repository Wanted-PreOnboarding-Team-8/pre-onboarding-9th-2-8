import { VStack, Text, Heading, Button, Stack } from '@chakra-ui/react';
import { IProduct } from '@/interface/product';
import { useAppDispatch, useAppSelector } from '@/store';
import Reservations from './Reservations';
import { calculateTotal } from '@/lib/utils/productsHelpers';
import { onOpen } from '@/store/slices/modalSlice';

const ReservationsList = () => {
  const dispatch = useAppDispatch();

  const {
    cart: { carts },
  } = useAppSelector((state) => state);

  const cartTotal = calculateTotal(carts);

  return (
    <>
      <Stack>
        <Heading size="xl" as="h4" mt={4}>
          전체 {carts.length}개
        </Heading>
        <VStack as="section" w="100%" minW="500px" p={4}>
          {carts.length ? (
            carts.map((product: IProduct) => (
              <Reservations key={product.idx} {...product} />
            ))
          ) : (
            <Text>장바구니에 상품이 없습니다.</Text>
          )}
        </VStack>
        <Button onClick={() => dispatch(onOpen(carts))}>
          총 {carts.length}개 | {cartTotal.toLocaleString()}원 결제하기
        </Button>
      </Stack>
    </>
  );
};
export default ReservationsList;
