import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Heading,
  Stack,
  Text,
  StackDivider,
  IconButton,
  Checkbox,
  Button,
} from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { IProduct } from '@/interface/product';
import { useAppDispatch, useAppSelector } from '@/store';
import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import EmptyReservations from '@/components/reservations/EmptyReservations';
import ReservationsList from '@/components/reservations/ReservationsList';
import DeleteDiallog from '@/components/reservations/DeleteDiallog';
import { onOpen } from '@/store/slices/dialogSlice';

const Reservations = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state);
  const [productNumber, setProductNumber] = useState(
    Array.from({ length: cart?.length }, () => 1),
  );
  const [checkedItems, setCheckedItems] = useState(
    Array.from({ length: cart?.length }, () => false),
  );
  const [cartIndex, setCartIndex] = useState<number[]>([]);
  const allChecked = checkedItems.every(Boolean);

  const cartId = cart.map((element) => element.idx);
  const sumPrice = cart
    .map((element, index) => element.price * productNumber[index])
    .reduce((sum, curValue) => sum + curValue, 0);

  const allCheckedHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckedItems(
      Array.from({ length: cart?.length }, () => e.target.checked),
    );
    setCartIndex(cartId);
  };

  const selectDeleteHandler = () => {
    dispatch(onOpen(cartIndex));
    setCheckedItems(Array.from({ length: cart?.length }, () => false));
  };

  return (
    <>
      <Center as="main" bg="tomato" w="100%">
        <Card w="60%" variant="outline">
          <CardHeader display="flex" justifyContent="space-between">
            <Heading size="md">장바구니</Heading>
            <Link to="/main">
              <IconButton
                aria-label="Search database"
                icon={<ChevronLeftIcon />}
              />
            </Link>
          </CardHeader>
          <Stack></Stack>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Checkbox isChecked={allChecked} onChange={allCheckedHandler}>
                전체 선택
              </Checkbox>
              <Button onClick={selectDeleteHandler}>선택 삭제</Button>
              {cart.length ? (
                cart.map((cartProduct: IProduct, index) => (
                  <ReservationsList
                    key={cartProduct.idx}
                    index={index}
                    cartProduct={cartProduct}
                    productNumber={productNumber}
                    setProductNumber={setProductNumber}
                    checkedItems={checkedItems}
                    setCheckedItems={setCheckedItems}
                    cartIndex={cartIndex}
                    setCartIndex={setCartIndex}
                  />
                ))
              ) : (
                <EmptyReservations />
              )}
            </Stack>
          </CardBody>
          <CardFooter gap="5px">
            <Heading size="md">총합</Heading>
            <Text>{sumPrice ? sumPrice : 0}</Text>
            <Heading size="md">원</Heading>
          </CardFooter>
        </Card>
      </Center>
      <DeleteDiallog />
    </>
  );
};
export default Reservations;
