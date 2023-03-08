import { RootState, useAppSelector } from '@/store';
import { VStack, VisuallyHidden, Heading, Stack } from '@chakra-ui/react';
import FilterPrice from './FilterPrice';
import FilterSpaceCategory from './FilterSpaceCategory';

const Filter = () => {
  const {
    products: { products },
  } = useAppSelector((state: RootState) => state);

  return (
    <VStack as="section" bg="blue.100" w="50%" p={4}>
      <VisuallyHidden>
        <Heading>필터 옵션</Heading>
      </VisuallyHidden>
      <Stack w="90%">
        <FilterSpaceCategory products={products} />
        <FilterPrice />
      </Stack>
    </VStack>
  );
};
export default Filter;
