import ReservationsList from '@/components/ReservationsList';
import { IProduct } from '@/interface/product';
import { useAppSelector } from '@/store';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Heading,
  Stack,
  Text,
  StackDivider,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Reservations = () => {
  const { cart } = useAppSelector((state) => state);
  const [productNumber, setProductNumber] = useState(
    Array.from({ length: cart?.length }, () => 1),
  );
  const sumPrice = cart
    .map((element, index) => element.price * productNumber[index])
    .reduce((sum, curValue) => sum + curValue, 0);

  return (
    <Center as="main" bg="tomato" w="100%">
      <Card w="60%" variant="outline">
        <CardHeader display="flex" justifyContent="space-between">
          <Heading size="md">장바구니</Heading>
          <Link to="/main">
            <Button>뒤로가기</Button>
          </Link>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {cart.map((cartProduct: IProduct, index) => (
              <ReservationsList
                key={cartProduct.idx}
                index={index}
                cartProduct={cartProduct}
                productNumber={productNumber}
                setProductNumber={setProductNumber}
              />
            ))}
          </Stack>
        </CardBody>
        <CardFooter gap="5px">
          <Heading size="md">총합</Heading>
          <Text>{sumPrice ? sumPrice : 0}</Text>
          <Heading size="md">원</Heading>
        </CardFooter>
      </Card>
    </Center>
  );
};
export default Reservations;
