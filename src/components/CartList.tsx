import { useAppSelector } from '@/store';
import { Button, Center, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import CartItem from './CartItem';
import { CartType } from '@/interface/cart';
import { Link } from 'react-router-dom';

const CartList = () => {
  const cartList = useAppSelector((state) => state.cart);
  const totalCost = cartList
    .reduce((prev, cur) => prev + cur.price * cur.quantity, 0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <VStack as="section" minW="500px" p={4}>
      <Link to="/main">
        <Button>상품 추가하러 가기</Button>
      </Link>
      <Heading>장바구니</Heading>
      <Grid as="section" w="100%" p={4}>
        {cartList.length ? (
          <VStack>
            {cartList.map((product: CartType) => (
              <CartItem key={product.idx} product={product} />
            ))}
            <Text>총 상품 금액</Text>
            <Text fontSize="4xl">{totalCost}</Text>
          </VStack>
        ) : (
          <Center>
            <VStack>
              <Text>장바구니 비어있음</Text>
            </VStack>
          </Center>
        )}
      </Grid>
    </VStack>
  );
};

export default CartList;
