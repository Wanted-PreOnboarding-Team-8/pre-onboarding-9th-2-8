import { IProductModalProps } from '@/pages/MainPage/types';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  Text,
} from '@chakra-ui/react';

const MainModal = ({ isOpen, onClose, product }: IProductModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{product.name}</ModalHeader>
        <Text>{product.idx}</Text>
        <Text>{product.spaceCategory}</Text>
        <ModalCloseButton />
        <ModalBody>
          <Image src={product.mainImage} alt={product.name} />
          <Text>{product.description}</Text>
          <Text color="blue.600" fontSize="2xl">
            {product.price}
          </Text>
          <Text>구매가능 제한 : {product.maximumPurchases}</Text>
          <Text>등록일 : {product.registrationDate}</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            닫기
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MainModal;
