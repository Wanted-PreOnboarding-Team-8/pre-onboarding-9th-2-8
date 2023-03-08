import {
  Popover,
  PopoverTrigger,
  Button,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
} from '@chakra-ui/react';
import PriceOption from '@/components/filter/PriceOption';

const Filter = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>필터</Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent w="400px">
          <PopoverArrow />
          <PopoverHeader>필터 옵션</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            <PriceOption />
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};
export default Filter;
