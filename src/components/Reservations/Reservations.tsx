import {
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Spinner,
  Stack,
  Text,
  Badge,
} from '@chakra-ui/react';
import { IProduct } from '@/interface/product';
import { useAppDispatch } from '@/store';
import { onOpen } from '@/store/slices/modalSlice';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from '@/store/slices/cartSlice';
import { useEffect } from 'react';
import { calculateTotal } from '@/lib/utils/productsHelpers';

const saveToSessionStorage = (productData: IProduct) => {
  sessionStorage.setItem('productData', JSON.stringify(productData));
};

const Reservations = (productData: IProduct) => {
  useEffect(() => {
    saveToSessionStorage(productData);
  }, [productData]);

  useEffect(() => {
    const savedData = sessionStorage.getItem('productData');
    if (savedData) {
      JSON.parse(savedData);
    }
  }, []);

  const dispatch = useAppDispatch();

  const handleIncreaseClick = () => {
    dispatch(
      increaseQuantity({
        idx: productData.idx,
        maxQuantity: productData.maximumPurchases,
      }),
    );
  };

  const handleDecreaseClick = () => {
    dispatch(decreaseQuantity({ idx: productData.idx }));
  };

  const handleRemoveClick = () => {
    dispatch(removeFromCart({ idx: productData.idx }));
  };

  const productTotal = calculateTotal([productData]);

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
            <Button
              variant="outline"
              size="xs"
              colorScheme="gray"
              onClick={handleDecreaseClick}
            >
              -
            </Button>
            <Text>{productData.quantity}</Text>
            <Button
              ml="1"
              variant="outline"
              size="xs"
              colorScheme="gray"
              onClick={handleIncreaseClick}
            >
              +
            </Button>
            <Text color="blue.600" fontSize="2xl">
              {productTotal.toLocaleString()}원
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
              onClick={handleRemoveClick}
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
