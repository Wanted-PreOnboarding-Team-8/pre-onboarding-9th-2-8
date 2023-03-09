import { useAppSelector } from '@/store';
import { Button, Center, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import CartItem from './CartItem';
import { CartType } from '@/interface/cart';
import { Link } from 'react-router-dom';

const CartList = () => {
  const cartList = useAppSelector((state) => state.cart);

  return (
    <VStack as="section" minW="500px" p={4}>
      <Heading>장바구니</Heading>
      <Grid as="section" w="100%" p={4}>
        {cartList.length ? (
          cartList.map((product: CartType) => (
            <CartItem key={product.idx} product={product} />
          ))
        ) : (
          <Center>
            <VStack>
              <Text>장바구니 비어있음</Text>
              <Link to="/main">
                <Button>상품 추가하러 가기</Button>
              </Link>
            </VStack>
          </Center>
        )}
      </Grid>
    </VStack>
  );
};

export default CartList;
