import { Box, Button, HStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@/store';

const CartButton = () => {
  const cartList = useAppSelector((state) => state.cart);
  return (
    <HStack position="relative" alignSelf="flex-end">
      {cartList.length && (
        <Box
          borderRadius="50"
          w="5"
          h="5"
          backgroundColor="red"
          position="absolute"
          top="-2"
          right="-2"
          textAlign="center"
          color="white"
          zIndex={1}
        >
          {cartList.length}
        </Box>
      )}
      <Link to="/reservations">
        <Button>장바구니</Button>
      </Link>
    </HStack>
  );
};

export default CartButton;
