import { Button } from '@chakra-ui/react';

type SelectProductBtnType = {
  onClick: any;
};
const SelectProductBtn = (props: SelectProductBtnType) => {
  return (
    <Button colorScheme="blue" onClick={props.onClick}>
      Button
    </Button>
  );
};

export default SelectProductBtn;
