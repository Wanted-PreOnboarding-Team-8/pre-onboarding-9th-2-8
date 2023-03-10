import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Box,
  useToast,
  Badge,
} from '@chakra-ui/react';
import { IProduct } from '@/interface/product';
import { useAppDispatch } from '@/store';
import {
  addToCart,
  removeOneFromCart,
  removeAllFromCart,
} from '@/store/slices/cartSlice';

const ReservatedProduct = (productData: any) => {
  const dispatch = useAppDispatch();
  const toast = useToast();

  const handleReservation = (product: any) => {
    if (product.reservationCount <= Number(product.maximumPurchases)) {
      dispatch(addToCart(product));
      toast({
        title: `${product.name} 1개 추가`,
        description: `장바구니에 ${product.reservationCount}개 있습니다`,
        position: 'top-right',
        status: 'success',
        isClosable: true,
      });
    } else {
      toast({
        title: `${product.name} 구매 개수 초과`,
        description: `인 당 ${product.maximumPurchases}개만 구매하실 수 있습니다.`,
        position: 'top-right',
        status: 'error',
        isClosable: true,
      });
    }
  };

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
            <Box>예약 수량: {productData.reservationCount}</Box>
          </Stack>
        </CardBody>
        <CardFooter gap="5px">
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => handleReservation(productData)}
          >
            한개 추가
          </Button>
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
