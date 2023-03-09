import { ICartState } from '@/interface/cart';
import { useAppDispatch } from '@/store';
import { removeCart, updateCount } from '@/store/slices/cartSlice';
import {
  CloseButton,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Td,
  Tr,
} from '@chakra-ui/react';

const CartItem = (CartData: ICartState) => {
  const dispatch = useAppDispatch();
  const product = CartData.product;
  const CartCount = CartData.count;

  const onChangeCount = (count: string) => {
    dispatch(updateCount({ ...CartData, count: Number(count) }));
  };

  const onDelete = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(removeCart(CartData.product.idx));
  };

  return (
    <Tr>
      <Td>
        <CloseButton onClick={onDelete} />
      </Td>
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
        <NumberInput
          defaultValue={CartCount}
          min={1}
          max={product.maximumPurchases}
          onChange={onChangeCount}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Td>
      <Td>{product.price.toLocaleString()} 원</Td>
    </Tr>
  );
};
export default CartItem;
