import {
  Center,
  Divider,
  Flex,
  FormControl,
  Heading,
  HStack,
  Select,
  Switch,
  Tag,
  TagCloseButton,
  TagLabel,
  VStack,
} from '@chakra-ui/react';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { deduplication } from '@/lib/utils/deduplication';
import { useAppDispatch, useAppSelector } from '@/store';
import { addFilter, removeFilter } from '@/store/slices/filterSlice';

const SpaceCategoryOption = () => {
  const {
    products: { products },
  } = useAppSelector((state) => state);
  const [checked, setChecked] = useState(false);
  const [optionList, setOptionList] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  const locationList: string[] = useMemo(
    () => deduplication(products.map((product) => product.spaceCategory)),
    [products],
  );

  useEffect(() => {
    setOptionList(locationList);
  }, [locationList]);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const deduplicated = deduplication([...selected, e.target.value]);
    setSelected(deduplicated);

    dispatch(
      addFilter({
        type: 'space',
        value: deduplicated,
      }),
    );
  };

  const onDelete = (location: string) => {
    const removedList = selected.filter((item) => item !== location);
    setSelected(removedList);

    if (!checked) return;

    dispatch(
      addFilter({
        type: 'space',
        value: removedList,
      }),
    );
  };

  const onChangeFilter = () => {
    if (!checked) {
      dispatch(
        addFilter({
          type: 'space',
          value: selected,
        }),
      );
    } else {
      dispatch(removeFilter('space'));
    }
    setChecked((cur) => !cur);
  };

  return (
    <VStack spacing={3}>
      <Center>
        <Heading as="h3" size="sm">
          공간 필터
        </Heading>
      </Center>
      <FormControl>
        <HStack width="100%">
          <Switch size="md" isChecked={checked} onChange={onChangeFilter} />
          <Select isDisabled={!checked} onChange={onChange}>
            {optionList.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </Select>
        </HStack>
      </FormControl>
      <Divider />
      <Flex justifyContent="flex-start" gap="1" wrap="wrap">
        {selected.map((location) => (
          <Tag
            size="md"
            borderRadius="full"
            variant="solid"
            key={location}
            colorScheme={checked ? 'green' : 'gray'}
          >
            <TagLabel>{location}</TagLabel>
            <TagCloseButton onClick={() => onDelete(location)} />
          </Tag>
        ))}
      </Flex>
    </VStack>
  );
};

export default SpaceCategoryOption;
