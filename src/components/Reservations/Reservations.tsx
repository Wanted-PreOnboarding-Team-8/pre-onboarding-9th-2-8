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

const Reservations = (productData: IProduct) => {
  const dispatch = useAppDispatch();

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
