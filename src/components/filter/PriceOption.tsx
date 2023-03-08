import {
  Center,
  Divider,
  Heading,
  HStack,
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Switch,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { minMaxPrice } from '@/lib/utils/minMaxPrice';
import { useAppDispatch, useAppSelector } from '@/store';
import { addFilter, removeFilter } from '@/store/slices/filterSlice';

const PriceOption = () => {
  const {
    products: { products },
  } = useAppSelector((state) => state);
  const [maxPrice] = minMaxPrice(products);
  const [rate, setRate] = useState([0, 30000]);
  const [checked, setChecked] = useState(false);
  const dispatch = useAppDispatch();

  const onChange = (priceData: number[]) => {
    dispatch(
      addFilter({
        type: 'price',
        value: priceData,
      }),
    );
    setRate(priceData);
  };

  const onChangeFilter = () => {
    if (!checked) {
      dispatch(
        addFilter({
          type: 'price',
          value: rate,
        }),
      );
    } else {
      dispatch(removeFilter('price'));
    }
    setChecked((cur) => !cur);
  };

  return (
    <VStack spacing={3}>
      <Center>
        <Heading as="h3" size="sm">
          가격 필터
        </Heading>
      </Center>
      <HStack>
        <Switch size="md" isChecked={checked} onChange={onChangeFilter} />
        <RangeSlider
          min={0}
          max={maxPrice}
          step={1000}
          value={rate}
          onChange={onChange}
          isDisabled={!checked}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack bg="blue.100" />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={3} index={0} bg="blue.500" />
          <RangeSliderThumb boxSize={3} index={1} bg="blue.500" />
        </RangeSlider>
        <HStack>
          <Input
            placeholder="최소값"
            type="number"
            value={rate[0]}
            onChange={({ target }) =>
              onChange([parseInt(target.value), rate[1]])
            }
            isDisabled={!checked}
          />
          <Text>~</Text>
          <Input
            placeholder="최대값"
            value={rate[1]}
            onChange={({ target }) =>
              onChange([rate[0], parseInt(target.value)])
            }
            isDisabled={!checked}
          />
        </HStack>
      </HStack>
      <Divider />
    </VStack>
  );
};

export default PriceOption;
