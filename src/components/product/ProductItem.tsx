import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux';
import { IProduct } from '@/pages/product/type';
import { addCart } from '@/slices/cart';
import {
  Card,
  CardBody,
  Image,
  Heading,
  Stack,
  Text,
  CardFooter,
  Button,
  Badge,
} from '@chakra-ui/react';

type Props = {
  product: IProduct;
};
const ProductItem = ({ product }: Props) => {
  const cartList = useAppSelector((state) => state.cartReducer);
  const dispatch = useAppDispatch();

  const addProductToCart = () => {
    const filteredCart = cartList.filter((p) => p.idx === product.idx);
    if (filteredCart.length) {
      //TODO: modifyCart;
    } else {
      dispatch(addCart(product));
    }
  };

  return (
    <Card direction={{ base: 'column', sm: 'row' }}>
      <Image src={product.mainImage} alt={product.name} />
      <Stack>
        <CardBody>
          <Badge>{product.idx}</Badge>
          <Badge>{product.spaceCategory}</Badge>
          <Heading>{product.name}</Heading>
          <Text>{product.price}</Text>
          <CardFooter>
            <Button onClick={addProductToCart}>Add to Cart</Button>
          </CardFooter>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default ProductItem;
