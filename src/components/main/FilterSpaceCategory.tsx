import { useState, ChangeEvent } from 'react';
import { Checkbox, Stack, Text } from '@chakra-ui/react';
import { IProduct } from '@/interface/product';

const spaceCategory = [
  { id: 0, category: '강원' },
  { id: 1, category: '대구' },
  { id: 2, category: '부산' },
  { id: 3, category: '서울' },
  { id: 4, category: '제주' },
];

const FilterSpaceCategory = ({ products }: { products: IProduct[] }) => {
  const [checkedItems, setCheckedItems] = useState(
    Array.from({ length: spaceCategory?.length }, () => false),
  );
  const allChecked = checkedItems.every(Boolean);

  const checkedHandler = (
    e: ChangeEvent<HTMLInputElement>,
    space: { id: number; category: string },
  ) => {
    checkedItems.splice(space.id, 1, e.target.checked);
    setCheckedItems([...checkedItems]);
  };

  return (
    <>
      <Text>장소</Text>
      <Checkbox
        isChecked={allChecked}
        onChange={(e) =>
          setCheckedItems(
            Array.from(
              { length: spaceCategory?.length },
              () => e.target.checked,
            ),
          )
        }
      >
        전체 선택
      </Checkbox>
      <Stack pl={6} mt={1} spacing={1}>
        {spaceCategory.map((space) => (
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
