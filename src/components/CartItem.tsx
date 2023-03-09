import {
  Card,
  CardBody,
  Center,
  Image,
  Spinner,
  Stack,
  Heading,
  Badge,
  Text,
  CardFooter,
  Button,
  IconButton,
  HStack,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import { useAppDispatch } from '@/store';
import { onOpen } from '@/store/slices/modalSlice';
import { deleteCartItem, modifyCartItem } from '@/store/slices/cartSlice';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { CartType } from '@/interface/cart';

type Props = {
  product: CartType;
};

const CartItem = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  const toast = useToast();

  const onDeleteCartItem = () => {
    toast({
      title: `장바구니 아이템 삭제`,
      description: `상품이 삭제되었습니다.`,
      position: 'top-right',
      status: 'success',
      isClosable: true,
    });
    dispatch(onOpen(product));
  };

  const onModifyCartItem = (n: number) => {
    const quantity = product.quantity + n;
    if (quantity < 0) {
      return;
    } else if (quantity > product.maximumPurchases) {
      toast({
        title: '최대 구매 수량을 담았습니다.',
        position: 'top-right',
        status: 'error',
        isClosable: true,
      });
      return;
    }
    dispatch(
      modifyCartItem({
        idx: product.idx,
        quantity,
      }),
    );
  };
  return (
    <Card direction={{ base: 'column', sm: 'row' }} w="100%" variant="outline">
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '200px' }}
        src={product.mainImage}
        alt={product.name}
        fallback={
          <Center w="40%" h="100%">
            <Spinner />
          </Center>
        }
      />
      <Stack>
        <CardBody>
          <Heading size="md">{product.name}</Heading>
          <Stack direction="row">
            <Badge colorScheme="green">
              {product.price.toLocaleString()} 원
            </Badge>
            <Badge colorScheme="purple">{product.spaceCategory}</Badge>
          </Stack>
          <Text py="2">{product.description}</Text>
          <Text py="2">등록번호 : {product.idx}</Text>
        </CardBody>
        <CardFooter gap="5px">
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => {
              dispatch(deleteCartItem(product.idx));
            }}
          >
            삭제
          </Button>
          <Button variant="solid" colorScheme="blue" onClick={onDeleteCartItem}>
            더 보 기
          </Button>
          <HStack alignSelf="flex-end">
            <IconButton
              variant="outline"
              colorScheme="teal"
              aria-label="Send email"
              onClick={() => onModifyCartItem(-1)}
              icon={<MinusIcon />}
            />
            <Text>{product.quantity}</Text>
            <IconButton
              variant="outline"
              colorScheme="teal"
              aria-label="Send email"
              onClick={() => onModifyCartItem(1)}
              icon={<AddIcon />}
            />
          </HStack>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default CartItem;
