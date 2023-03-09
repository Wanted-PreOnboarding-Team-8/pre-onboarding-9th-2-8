import { ICartState } from '@/interface/cart';
import { useAppSelector } from '@/store';
import {
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
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
              <Th></Th>
              <Th>상품 이미지</Th>
              <Th textAlign="center">상품명</Th>
              <Th textAlign="center">수량</Th>
              <Th textAlign="center">금액</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cart.length !== 0 ? (
              cart.map((cartItem: ICartState) => (
                <CartItem key={cartItem.product.idx} {...cartItem} />
              ))
            ) : (
              <Tr>
                <Td textAlign="center" colSpan={5}>
                  장바구니에 상품이 없습니다. 😭
                </Td>
              </Tr>
            )}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th></Th>
              <Th>상품 이미지</Th>
              <Th textAlign="center">할인 금액</Th>
              <Th textAlign="center">총 수량</Th>
              <Th textAlign="center">총 금액</Th>
            </Tr>
            <Tr>
              <Th></Th>
              <Th>-</Th>
              <Th textAlign="center">0 원</Th>
              <Th textAlign="center">
                {cart.reduce((pre, cur) => pre + cur.count, 0)} 개
              </Th>
              <Th textAlign="center">
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
