import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Badge,
} from '@chakra-ui/react';
import { IProduct } from '@/interface/product';
import { useAppDispatch } from '@/store';
import { removeOneFromCart, removeAllFromCart } from '@/store/slices/cartSlice';

const ReservatedProduct = (productData: IProduct) => {
  const dispatch = useAppDispatch();

  return (
    <Card direction={{ base: 'column', sm: 'row' }} w="100%" variant="outline">
      <Stack>
        <CardBody>
          <Heading size="md">{productData.name}</Heading>
          <Stack direction="row">
            <Badge colorScheme="green">
              {productData.price.toLocaleString()} 원
            </Badge>
            <Badge colorScheme="purple">{productData.spaceCategory}</Badge>
          </Stack>
        </CardBody>
        <CardFooter gap="5px">
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => dispatch(removeOneFromCart(productData.idx))}
          >
            한개 삭제
          </Button>
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => dispatch(removeAllFromCart(productData.idx))}
          >
            전체 삭제
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};
export default ReservatedProduct;
