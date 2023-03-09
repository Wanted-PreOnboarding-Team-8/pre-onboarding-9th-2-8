import { ICartState } from '@/interface/cart';
import { useAppSelector } from '@/store';
import {
  Heading,
  Table,
  TableContainer,
  Tbody,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';
import CartItem from './CartItem';

const CartList = () => {
  const { cart } = useAppSelector((state) => state);

  return (
    <VStack as="section" bg="blue.100" w="75%" minW="800px" p={4}>
      <Heading>장바구니</Heading>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>상품 이미지</Th>
              <Th>상품명</Th>
              <Th>수량</Th>
              <Th isNumeric>금액</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cart.map((cartItem: ICartState) => (
              <CartItem key={cartItem.product.idx} {...cartItem} />
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>상품 이미지</Th>
              <Th>할인 금액</Th>
              <Th>총 수량</Th>
              <Th isNumeric>총 금액</Th>
            </Tr>
            <Tr>
              <Th> </Th>
              <Th>0 원</Th>
              <Th>{cart.reduce((pre, cur) => pre + cur.count, 0)}</Th>
              <Th isNumeric>
                {cart
                  .reduce((pre, cur) => pre + cur.product.price, 0)
                  .toLocaleString()}
                원
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </VStack>
  );
};
export default CartList;
