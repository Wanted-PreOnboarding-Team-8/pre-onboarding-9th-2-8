import { useState, ChangeEvent } from 'react';
import { Checkbox, Stack, Text } from '@chakra-ui/react';
import { useAppDispatch } from '@/store';
import { filterCategoryProducts } from '@/store/slices/productSlice';

const SPACE_CATEGORY = [
  { id: 0, category: '강원' },
  { id: 1, category: '대구' },
  { id: 2, category: '부산' },
  { id: 3, category: '서울' },
  { id: 4, category: '제주' },
];

const FilterSpaceCategory = () => {
  const dispatch = useAppDispatch();
  const [checkedItems, setCheckedItems] = useState(
    Array.from({ length: SPACE_CATEGORY?.length }, () => false),
  );
  const allChecked = checkedItems.every(Boolean);

  const allCheckedHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckedItems(
      Array.from({ length: SPACE_CATEGORY?.length }, () => e.target.checked),
    );

    const checkSpaceCatogory = SPACE_CATEGORY.map(
      (element) => element.category,
    );
    dispatch(filterCategoryProducts({ spaceCategory: checkSpaceCatogory }));
  };

  const checkedHandler = (
    e: ChangeEvent<HTMLInputElement>,
    space: { id: number; category: string },
  ) => {
    checkedItems.splice(space.id, 1, e.target.checked);
    setCheckedItems([...checkedItems]);

    const findCheckedIndex = checkedItems.map((element, index) => {
      if (element) return index;
      else return -1;
    });

    const checkSpaceCatogory = SPACE_CATEGORY.filter(
      (element, index) => element.id === findCheckedIndex[index],
    ).map((element) => element.category);
    dispatch(filterCategoryProducts({ spaceCategory: checkSpaceCatogory }));
  };

  return (
    <>
      <Text>장소</Text>
      <Checkbox isChecked={allChecked} onChange={allCheckedHandler}>
        전체 선택
      </Checkbox>
      <Stack pl={6} mt={1} spacing={1}>
        {SPACE_CATEGORY.map((space) => (
          <Checkbox
            key={space.id}
            isChecked={checkedItems[space.id]}
            onChange={(e) => checkedHandler(e, space)}
          >
            {space.category}
          </Checkbox>
        ))}
      </Stack>
    </>
  );
};

export default FilterSpaceCategory;
