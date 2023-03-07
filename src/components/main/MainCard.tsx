import { IProduct } from '@/pages/MainPage/types';
import { addProduct } from '@/store/modules/productReducer';
import {
  Card,
  Image,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

const MainCard = ({ product }: { product: IProduct }) => {
  const dispatch = useDispatch();

  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={product.mainImage} alt={product.name} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{product.name}</Heading>
          <Text color="blue.600" fontSize="2xl">
            {product.price}
          </Text>
          <Text>{product.idx}</Text>
          <Text>{product.spaceCategory}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => dispatch(addProduct(product))}
          >
            예약하기
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default MainCard;
