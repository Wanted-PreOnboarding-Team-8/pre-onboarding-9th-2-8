import { Dispatch, SetStateAction } from 'react';
import { IProduct } from './product';

export interface ISpaceTagProps {
  spaceKey: string;
  spaceHashMap: { [key: string]: boolean };
  onToggleSpace: (key: string) => void;
}

export interface IReservationsList {
  cartProduct: IProduct;
  index: number;
  productNumber: number[];
  setProductNumber: Dispatch<SetStateAction<number[]>>;
  checkedItems: boolean[];
  setCheckedItems: Dispatch<SetStateAction<boolean[]>>;
  cartIndex: number[];
  setCartIndex: Dispatch<SetStateAction<number[]>>;
}
