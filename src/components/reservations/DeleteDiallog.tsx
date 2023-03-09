import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import { useAppDispatch } from '@/store';
import { deleteCart } from '@/store/slices/cartSlice';
import { IDeleteDiallog } from '@/interface/props';

const DeleteDiallog = ({ isOpen, onClose, id }: IDeleteDiallog) => {
  const dispatch = useAppDispatch();

  const cancelRef = useRef(null);

  const deleteCartHandler = () => {
    dispatch(deleteCart(id));
    onClose();
  };

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            장바구니 삭제
          </AlertDialogHeader>

          <AlertDialogBody>선택하신 상품을 삭제하시겠습니까?</AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              취소
            </Button>
            <Button colorScheme="red" onClick={deleteCartHandler} ml={3}>
              삭제
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default DeleteDiallog;
