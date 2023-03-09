import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Box,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '@/store';
import { setPriceRange } from '@/store/slices/filterSlice';

const MAX_PRICE = 100_000;
const STEP = 1_000;

const PriceFilter = () => {
  const dispatch = useAppDispatch();
  const { minPrice, maxPrice } = useAppSelector(
    (state) => state.filter.byPrice,
  );

  return (
    <RangeSlider
      defaultValue={[0, MAX_PRICE]}
      max={MAX_PRICE}
      step={STEP}
      onChange={(range) => {
        dispatch(setPriceRange(range));
      }}
    >
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb boxSize={6} index={0}>
        <Box mt="70px">{minPrice}</Box>
      </RangeSliderThumb>
      <RangeSliderThumb boxSize={6} index={1}>
        <Box mt="70px">{maxPrice}</Box>
      </RangeSliderThumb>
    </RangeSlider>
  );
};

export default PriceFilter;
