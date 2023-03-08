import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Heading,
  Image,
  Stack,
  Text,
  useToast,
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
      cart.filter((item) => item.idx === product.idx).length + 1;

    if (productLength <= Number(product.maximumPurchases)) {
      dispatch(addToCart(product));
      toast({
        title: `${product.name} 1개 추가`,
        description: `장바구니에 ${productLength}개 있습니다`,
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
    <Card
      direction={{ base: 'column', sm: 'row' }}
      variant="outline"
      m={3}
      onClick={() => dispatch(onOpen(productData))}
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '200px' }}
        src={productData.mainImage}
        alt={productData.name}
      />

      <Stack w="100%">
        <CardBody>
          <Heading size="md">
            {productData.name} <Badge>{productData.idx}</Badge>
          </Heading>

          <Text py="2">{productData.description}</Text>

          <Text color="blue.600" fontSize="2xl">
            {`₩${productData.price.toLocaleString()}`}
          </Text>
        </CardBody>

        <CardFooter justify="flex-end">
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => handleReservation(productData)}
          >
            예 약
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};
export default Product;
