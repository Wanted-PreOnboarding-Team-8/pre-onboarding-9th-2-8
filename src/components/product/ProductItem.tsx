import { IProduct } from '@/pages/product/type';
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
            <Button>Add to Cart</Button>
          </CardFooter>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default ProductItem;
