import {
  Button,
  Card,
  CardBody,
  CardFooter,
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
  const toast = useToast();

  const { cart } = useAppSelector((state) => state);

  const handleReservation = async (product: IProduct) => {
    const existingProductIndex = cart.carts.findIndex(
      (item) => item.idx === product.idx,
    );

    if (existingProductIndex < 0) {
      dispatch(addToCart(product));
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
          <Stack direction="row">
            <Text color="blue.600" fontSize="xl">
              {productData.price.toLocaleString()}원
            </Text>
          </Stack>
          <Text py="2">{productData.description}</Text>
          <Stack direction="row">
            <Badge colorScheme="purple">{productData.spaceCategory}</Badge>
            <Badge>등록번호 : {productData.idx}</Badge>
          </Stack>
        </CardBody>
        <CardFooter gap="5px" justify="flex-end">
          <Button
            variant="outline"
            colorScheme="green"
            onClick={() => handleReservation(productData)}
          >
            예 약
          </Button>
          <Button
            variant="outline"
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
