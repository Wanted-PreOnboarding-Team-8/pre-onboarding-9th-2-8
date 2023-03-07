import { useRef } from 'react';
import { IProducts } from '@/pages/Main/types';
import { Button, Modal, useDisclosure } from '@chakra-ui/react';
import ProductModal from './ProductModal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { addProduct } from '@/app/reservationsSlice';

const ProductItem = ({ product }: { product: IProducts }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);
  const reservations = useSelector(
    (state: RootState) => state.reservations.reservProduct,
  );
  const dispatch = useDispatch();

  const reservationsItemHandler = () => {
    dispatch(addProduct(product));
  };
  console.log(reservations);

  return (
    <div>
      <div>
        <span onClick={onOpen}>
          <img src={product.mainImage} alt={product.name} />
          <p>
            {product.idx}. {product.name}
          </p>
          <p>{product.price}원</p>
          <p>{product.spaceCategory}</p>
        </span>
        <Button onClick={reservationsItemHandler}>예약</Button>
      </div>

      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ProductModal product={product} onClose={onClose} />
      </Modal>
    </div>
  );
};

export default ProductItem;
