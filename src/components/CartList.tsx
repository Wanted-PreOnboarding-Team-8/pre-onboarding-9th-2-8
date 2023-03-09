import { useAppSelector } from '@/store';
import { Grid, Heading, VStack } from '@chakra-ui/react';
import { IProduct } from '@/interface/product';
import CartItem from './CartItem';

const CartList = () => {
  const cartList = useAppSelector((state) => state.cart);

  return (
    <VStack as="section" minW="500px" p={4}>
      <Heading>장바구니</Heading>
      <Grid as="section" w="100%" p={4}>
        {cartList.map((product: IProduct) => (
          <CartItem key={product.idx} product={product} />
        ))}
      </Grid>
    </VStack>
  );
};

export default CartList;
