import { useAppSelector } from '@/store';
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
  const {
    products: { products },
  } = useAppSelector((state) => state);
  const [range, setRange] = useState<RangeType>({ min: -1, max: -1 });
  const [priceRange, setPriceRange] = useState<RangeType>({ min: -1, max: -1 });
  const [spaceList, setSpaceList] = useState<string[]>([]);

  useEffect(() => {
    const set = new Set<string>();
    let min = products[0].price;
    let max = products[0].price;
    products.forEach((product) => {
      set.add(product.spaceCategory);
      if (product.price > max) max = product.price;
      if (product.price < min) min = product.price;
    });
    setSpaceList(Array.from(set));
    setRange({ min, max });
    setPriceRange({ min, max });
  }, [products]);

  const handleChangeSlider = (val: [number, number]) => {
    setPriceRange({ min: val[0], max: val[1] });
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
          onChange={handleChangeSlider}
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
            <Checkbox key={i} value={space}>
              {space}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
    </VStack>
  );
};
export default Filter;
