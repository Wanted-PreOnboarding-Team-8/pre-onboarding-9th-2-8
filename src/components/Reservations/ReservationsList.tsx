import { VStack, Text, Heading, Button, Stack } from '@chakra-ui/react';
import { IProduct } from '@/interface/product';
import { useAppSelector } from '@/store';
import Reservations from './Reservations';

const ReservationsList = () => {
  const {
    cart: { carts },
  } = useAppSelector((state) => state);

  const total = carts.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

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
        <Button>총 {carts.length}개 | {total.toLocaleString()}원 결제하기</Button>
      </Stack>
    </>
  );
};
export default ReservationsList;
