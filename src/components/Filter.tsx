import { VStack, VisuallyHidden, Heading, Box } from '@chakra-ui/react';
import PriceFilter from './PriceFilter';

const Filter = () => {
  return (
    <VStack as="section" bg="blue.300" w="1000px" h="100px">
      <VisuallyHidden>
        <Heading>필터 옵션</Heading>
      </VisuallyHidden>
      <PriceFilter />
    </VStack>
  );
};

export default Filter;
