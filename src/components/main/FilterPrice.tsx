import React, { useState, useEffect } from 'react';
import {
  Text,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Stack,
  Input,
} from '@chakra-ui/react';
import { useAppDispatch } from '@/store';
import { filterProducts } from '@/store/slices/productSlice';
const FilterPrice = () => {
  const dispatch = useAppDispatch();
  const [priceFilter, setPriceFilter] = useState([0, 30000]);

  useEffect(() => {
    dispatch(
      filterProducts({ minPrice: priceFilter[0], maxPrice: priceFilter[1] }),
    );
  }, [dispatch, priceFilter]);

  return (
    <>
      <Text>가격</Text>
      <RangeSlider
        onChange={(value) => setPriceFilter([...value])}
        defaultValue={[1000, 30000]}
        min={0}
        max={30000}
        step={1000}
      >
        <RangeSliderTrack bg="red.100">
          <RangeSliderFilledTrack bg="tomato" />
        </RangeSliderTrack>
        <RangeSliderThumb fontSize={2} boxSize={8} index={0} />

        <RangeSliderThumb fontSize={2} boxSize={8} index={1} />
      </RangeSlider>
      <Stack display="flex" justifyContent="space-between">
        <Input
          value={priceFilter[0]}
          onChange={(e) =>
            setPriceFilter([
              Number(e.target.value) > priceFilter[1]
                ? priceFilter[1] - 1000
                : Number(e.target.value),
              priceFilter[1],
            ])
          }
          placeholder={String(priceFilter[0])}
          size="xs"
          maxLength={5}
        />
        <Input
          value={priceFilter[1]}
          onChange={(e) =>
            setPriceFilter([priceFilter[0], Number(e.target.value)])
          }
          placeholder={String(priceFilter[1])}
          size="xs"
          maxLength={5}
        />
      </Stack>
    </>
  );
};

export default FilterPrice;
