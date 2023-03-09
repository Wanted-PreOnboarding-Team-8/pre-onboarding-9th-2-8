import {
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Spinner,
  Stack,
  Text,
  useToast,
  Badge,
} from '@chakra-ui/react';
import { IProduct } from '@/interface/product';
import { useAppDispatch, useAppSelector } from '@/store';
import { onOpen } from '@/store/slices/modalSlice';
import { addToCart } from '@/store/slices/cartSlice';

const Reservations = (productData: IProduct) => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state);
  const toast = useToast();

  const handleReservation = (product: IProduct) => {
    dispatch(addToCart(product));
    if (!cart.isAdded) {
      toast({
        title: `${product.name} 1개 추가`,
        position: 'top-right',
        status: 'success',
        isClosable: true,
      });
    } else {
      toast({
        title: `${product.name}은 이미 장바구니에 담겨있습니다.`,
        position: 'top-right',
        status: 'error',
        isClosable: true,
      });
    }
  };

  return (
    <Card direction={{ base: 'column', sm: 'row' }} w="100%" variant="outline">
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '200px' }}
        src={productData.mainImage}
        alt={productData.name}
        fallback={<Spinner />}
      />
      <Stack w="100%">
        <CardBody>
          <Heading fontSize="2xl">{productData.name}</Heading>

          <Stack direction="row" align="center">
            <Text>구매 수량</Text>
            <Button variant="outline" size="xs" colorScheme="gray">
              -
            </Button>
            <Text>1</Text>
            <Button ml="1" variant="outline" size="xs" colorScheme="gray">
              +
            </Button>
            <Text color="blue.600" fontSize="2xl">
              {productData.price.toLocaleString()}원
            </Text>
          </Stack>
          <Badge colorScheme="red">
            인 당 {productData.maximumPurchases}개 구매 제한
          </Badge>
          <Text py="2">{productData.description}</Text>
          <Stack direction="row">
            <Badge colorScheme="purple">{productData.spaceCategory}</Badge>
            <Badge>등록번호 : {productData.idx}</Badge>
          </Stack>
          <Stack direction="row" justify="flex-end">
            <Button
              variant="outline"
              colorScheme="blue"
              onClick={() => dispatch(onOpen(productData))}
            >
              더 보 기
            </Button>
            <Button
              variant="outline"
              colorScheme="red"
              onClick={() => handleReservation(productData)}
            >
              삭 제
            </Button>
          </Stack>
        </CardBody>
      </Stack>
    </Card>
  );
};
export default Reservations;
