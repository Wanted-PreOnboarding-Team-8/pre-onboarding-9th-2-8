import { IProduct } from '@/pages/product/type';
import {
  Badge,
  Box,
  Button,
  Heading,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

type Props = {
  product: IProduct;
  children: React.ReactElement;
};
const ProductInfoModal = ({ product, children }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    onOpen();
  };
  return (
    <>
      <Box onClick={openModal}>{children}</Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>상품 정보</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Img src={product.mainImage} />
            <Badge>{product.idx}</Badge>
            <Badge>{product.spaceCategory}</Badge>
            <Heading>{product.name}</Heading>
            <Text>{product.price}</Text>
            <Text>{product.description}</Text>
            <Text>{product.maximumPurchase}</Text>
            <Text>{product.registrationDate}</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>닫기</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductInfoModal;
