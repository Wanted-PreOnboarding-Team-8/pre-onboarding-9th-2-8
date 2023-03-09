import { VStack, VisuallyHidden, Heading, Box } from '@chakra-ui/react';
import PriceFilter from './PriceFilter';
import LocationFilter from './LocationFilter';

const Filter = () => {
  return (
    <VStack as="section" bg="blue.300" w="1000px" h="100px">
      <VisuallyHidden>
        <Heading>필터 옵션</Heading>
      </VisuallyHidden>
      <Box w="800px">
        <PriceFilter />
      </Box>
      <Box mt="100px">
        <LocationFilter />
      </Box>
    </VStack>
  );
};

export default Filter;
