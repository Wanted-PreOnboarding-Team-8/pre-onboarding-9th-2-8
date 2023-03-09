import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
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

const Product = (productData: IProduct) => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state);
  const toast = useToast();

  const handleReservation = (product: IProduct) => {
    const productLength =
      cart.filter((item: IProduct) => item.idx === product.idx).length + 1;

    if (productLength > 1) {
      toast({
        title: `이미 담긴 상품입니다.`,
        description: `동일 상품을 여러 번 담을 수 없습니다.`,
        position: 'top-right',
        status: 'error',
        isClosable: true,
      });
    } else {
      dispatch(addToCart(product));
      toast({
        title: `${product.name} 1개 추가`,
        description: `장바구니에 성공적으로 추가하였습니다.`,
        position: 'top-right',
        status: 'success',
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
        fallback={
          <Center w="40%" h="100%">
            <Spinner />
          </Center>
        }
      />
      <Stack>
        <CardBody>
          <Heading size="md">{productData.name}</Heading>
          <Stack direction="row">
            <Badge colorScheme="green">
              {productData.price.toLocaleString()} 원
            </Badge>
            <Badge colorScheme="purple">{productData.spaceCategory}</Badge>
          </Stack>
          <Text py="2">{productData.description}</Text>
          <Text py="2">등록번호 : {productData.idx}</Text>
        </CardBody>
        <CardFooter gap="5px">
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => handleReservation(productData)}
          >
            예 약
          </Button>
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => dispatch(onOpen(productData))}
          >
            더 보 기
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};
export default Product;
