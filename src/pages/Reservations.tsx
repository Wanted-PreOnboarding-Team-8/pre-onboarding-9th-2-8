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
  StackDivider,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Reservations = () => {
  const { cart } = useAppSelector((state) => state);

  console.log(cart);
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
            {cart.map((cartProduct: IProduct) => (
              <ReservationsList key={cartProduct.idx} {...cartProduct} />
            ))}
          </Stack>
        </CardBody>
        <CardFooter gap="5px">
          <Heading size="md">총합</Heading>
        </CardFooter>
      </Card>
    </Center>
  );
};
export default Reservations;
