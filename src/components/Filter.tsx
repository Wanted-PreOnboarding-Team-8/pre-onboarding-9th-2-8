import { useAppSelector, useAppDispatch } from '@/store';
import { filterProducts } from '@/store/slices/productSlice';
import {
  VStack,
  Heading,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Text,
  CheckboxGroup,
  Stack,
  Checkbox,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const Filter = () => {
  const dispatch = useAppDispatch();
  const { products, filter } = useAppSelector((state) => state.products);
  const [range, setRange] = useState<RangeType>({ min: -1, max: -1 });
  const [priceRange, setPriceRange] = useState<RangeType>({ min: -1, max: -1 });
  const [spaceList, setSpaceList] = useState<string[]>([]);
  const [checkedSpaceList, setCheckedSpaceList] = useState<string[]>([]);

  useEffect(() => {
    if (products.length && range.min === -1) {
      setSpaceList(filter.spaceList);
      setRange(filter.priceRange);
      setPriceRange(filter.priceRange);
    }
  }, [products.length]);

  useEffect(() => {
    if (priceRange.min === -1) {
      return;
    }
    dispatch(filterProducts({ priceRange, checkedSpaceList }));
  }, [
    dispatch,
    checkedSpaceList,
    checkedSpaceList.length,
    priceRange,
    priceRange.min,
    priceRange.max,
  ]);

  const onChangeRangeSlider = (val: [number, number]) => {
    setPriceRange({ min: val[0], max: val[1] });
  };

  const onCheckSpace = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      setCheckedSpaceList((prev) => [...prev, e.currentTarget.value]);
    } else {
      setCheckedSpaceList((prev) =>
        prev.filter((p) => p !== e.currentTarget.value),
      );
    }
  };

  return (
    <VStack as="section" bg="blue.100" p={4}>
      <Heading>필터 옵션</Heading>
      <Text fontWeight="bold">상품 가격</Text>
      <Text>{`${priceRange.min}~${priceRange.max}`}</Text>
      {range.min !== -1 && (
        <RangeSlider
          defaultValue={[range.min, range.max]}
          min={range.min}
          max={range.max}
          step={1000}
          onChange={onChangeRangeSlider}
        >
          <RangeSliderTrack bg="red.100">
            <RangeSliderFilledTrack bg="tomato" />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
      )}
      <Text fontWeight="bold">공간</Text>
      <CheckboxGroup>
        <Stack>
          {spaceList.map((space, i) => (
            <Checkbox key={i} value={space} onChange={onCheckSpace}>
              {space}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
    </VStack>
  );
};
export default Filter;
