import { ICartState } from '@/interface/cart';
import { Image, Td, Tr } from '@chakra-ui/react';

const CartItem = (CartData: ICartState) => {
  const product = CartData.product;
  const CartCount = CartData.count;

  return (
    <Tr>
      <Td>
        <Image
          objectFit="cover"
          w="50px"
          h="50px"
          src={product.mainImage}
          alt={product.name}
          loading="lazy"
        />
      </Td>
      <Td>{product.name}</Td>
      <Td>
        {CartCount} / {product.maximumPurchases}
      </Td>
      <Td>{product.price.toLocaleString()} 원</Td>
    </Tr>
  );
};
export default CartItem;
