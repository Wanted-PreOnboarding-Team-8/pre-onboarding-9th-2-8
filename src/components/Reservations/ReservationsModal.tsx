import { calculateTotal } from '@/lib/utils/productsHelpers';
import { useAppSelector } from '@/store';
import { onClose } from '@/store/slices/modalSlice';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Stack,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

const ReservationsModal = () => {
  const dispatch = useDispatch();

  const {
    modal: { isOpen },
    cart: { carts },
  } = useAppSelector((state) => state);

  const handlePurchase = () => {
    sessionStorage.removeItem('productData');
    dispatch(onClose());
    window.location.href = '/main';
  };

  const cartTotal = calculateTotal(carts);

  return (
    <>
      <Modal size="sm" isOpen={isOpen} onClose={() => dispatch(onClose())}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>구매확인</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{carts.length}개를 구매하시겠습니까?</Text>
            <Text>구매 금액은 총 {cartTotal.toLocaleString()}원 입니다.</Text>
          </ModalBody>
          <ModalFooter>
            <Stack direction="row">
              <Button colorScheme="green" onClick={handlePurchase}>
                구매 확인
              </Button>
              <Button colorScheme="red" onClick={() => dispatch(onClose())}>
                구매 취소
              </Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ReservationsModal;
