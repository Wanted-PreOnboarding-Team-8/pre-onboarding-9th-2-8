import { Select } from '@chakra-ui/react';
import { IProduct } from '@/interface/product';
import { useEffect } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '@/store';
import { setLocationList, setLocationRange } from '@/store/slices/filterSlice';

const LocationFilter = () => {
  const dispatch = useAppDispatch();
  const {
    products: { products },
    filter: { byLocationRange },
  } = useAppSelector((state: RootState) => state);

  useEffect(() => {
    const getFiltered = (list: IProduct[]): string[] => {
      const result = [];
      for (let i = 0; i < list.length; i++) {
        const value = list[i].spaceCategory;
        if (result.indexOf(value) === -1) result.push(value);
      }
      return result;
    };

    //const locations = new Set(products.map((e) => e.spaceCategory));
    dispatch(setLocationList(getFiltered(products).sort()));
  }, [dispatch, products]);

  return (
    <Select
      placeholder="Select option"
      onChange={(e) => dispatch(setLocationRange(e.target.value))}
    >
      {byLocationRange.map((loca: string) => (
        <option key={loca} value={loca}>
          {loca}
        </option>
      ))}
    </Select>
  );
};

export default LocationFilter;
