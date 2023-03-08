import { useState } from 'react';
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Input,
  Select,
  Button,
  Stack,
  Box,
  Text,
  Checkbox,
} from '@chakra-ui/react';
import { useAppDispatch } from '@/store';
import {
  getFilteredProductsAll,
  getFilteredProductsPrice,
  getFilteredProductsSpaceCategory,
} from '@/store/slices/productSlice';
import {
  setMaxPrice,
  setMinPrice,
  setSpaceCategory,
} from '@/store/slices/filterSlice';

const Filter = () => {
  const dispatch = useAppDispatch();

  const [values, setValues] = useState<[number, number]>([5000, 15000]);
  const [selectValue, setSelectValue] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChange = (newValues: [number, number]) => {
    setValues(newValues);
  };

  const handleChanges = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const input = e.target.value;
    // 숫자가 아닌 입력값은 무시하도록 처리합니다.
    if (/^-?\d*$/.test(input)) {
      const newValues: [number, number] = [...values]; // 기존 values 배열을 복사합니다.
      newValues[index] = Number(input); // 인덱스에 해당하는 값을 새로운 값으로 대체합니다.

      if (index === 0 && newValues[0] > newValues[1]) {
        newValues[0] = newValues[1];
      } else if (index === 1 && newValues[1] < newValues[0]) {
        newValues[1] = newValues[0];
      }
      setValues(newValues);
    }
  };

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value);
    dispatch(setSpaceCategory(event.target.value));
  };

  const handleClickSelect = () => {
    dispatch(getFilteredProductsSpaceCategory(selectValue));
  };

  const handleClick = () => {
    dispatch(setMinPrice(values[0]));
    dispatch(setMaxPrice(values[1]));
    dispatch(
      getFilteredProductsPrice({ minPrice: values[0], maxPrice: values[1] }),
    );
  };

  const allHandleClick = () => {
    dispatch(setMinPrice(values[0]));
    dispatch(setMaxPrice(values[1]));
    dispatch(
      getFilteredProductsAll({
        minPrice: values[0],
        maxPrice: values[1],
        spaceCategory: selectValue,
      }),
    );
  };

  const handleSearch = () => {
    if (!isChecked && selectValue === '') {
      alert('지역이나 금액을 설정 해주세요');
    } else if (!isChecked && selectValue !== '') {
      handleClickSelect();
    } else if (isChecked && selectValue === '') {
      handleClick();
    } else {
      allHandleClick();
    }
  };

  return (
    <>
      <RangeSlider
        min={1000}
        max={30000}
        step={1000}
        defaultValue={[1000, 2000]}
        value={values}
        onChange={handleChange}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} fontSize="sm" boxSize="32px" />
        <RangeSliderThumb index={1} fontSize="sm" boxSize="32px" />
      </RangeSlider>

      <Stack direction="row" justify="center">
        <Checkbox onChange={(e) => setIsChecked(e.target.checked)}></Checkbox>
        <Box w="20%">
          <Input
            type="text"
            value={values[0]}
            onChange={(e) => handleChanges(e, 0)}
            isDisabled={!isChecked}
          />
        </Box>
        <Text fontSize="3xl">~</Text>
        <Box w="20%">
          <Input
            type="text"
            value={values[1]}
            onChange={(e) => handleChanges(e, 1)}
            isDisabled={!isChecked}
          />
        </Box>
        <Select placeholder="전체지역" onChange={handleChangeSelect} w="20%">
          <option value="서울">서울</option>
          <option value="강원">강원</option>
          <option value="부산">부산</option>
          <option value="대구">대구</option>
          <option value="제주">제주</option>
        </Select>

        <Button onClick={handleSearch}>검색</Button>
      </Stack>
      <Stack direction="row" justify="center" m={2}></Stack>
    </>
  );
};

export default Filter;
