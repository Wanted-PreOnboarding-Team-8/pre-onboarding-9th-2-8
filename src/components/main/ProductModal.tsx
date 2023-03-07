import React from 'react';
import {
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Image,
  Text,
} from '@chakra-ui/react';
import { IProducts } from '@/pages/Main/types';

const ProductModal = ({
  product,
  onClose,
}: {
  product: IProducts;
  onClose: () => void;
}) => {
  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>상품 정보</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src={product.mainImage} alt={product.name} />
          <Text>상품번호 : {product.idx}</Text>
          <Text>상품명 : {product.name}</Text>
          <Text>상품설명 : {product.description}</Text>
          <Text>지역 : {product.spaceCategory}</Text>
          <Text>가격 : {product.price}원</Text>
          <Text>최대구매가능 : {product.maximumPurchases}</Text>
          <Text>등록일 : {product.registrationDate}</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </>
  );
};

export default ProductModal;
