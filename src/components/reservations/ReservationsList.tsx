import {
  Heading,
  Text,
  Image,
  Badge,
  Stack,
  Card,
  VStack,
  IconButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Checkbox,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import React, { ChangeEvent } from 'react';
import { IReservationsList } from '@/interface/props';
import { useAppDispatch } from '@/store';
import { onOpen } from '@/store/slices/dialogSlice';

const ReservationsList = ({
  cartProduct,
  index,
  productNumber,
  setProductNumber,
  checkedItems,
  setCheckedItems,
  cartIndex,
  setCartIndex,
}: IReservationsList) => {
  const dispatch = useAppDispatch();

  const inputOnchangeHandler = (value: string) => {
    const productNumber_copy = [...productNumber];
    productNumber_copy.splice(index, 1, Number(value));
    setProductNumber([...productNumber_copy]);
  };

  const checkedHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const checkedItems_copy = [...checkedItems];
    const cartIndex_copy = [...cartIndex];
    checkedItems_copy.splice(index, 1, e.target.checked);
    setCheckedItems([...checkedItems_copy]);
    setCartIndex([...cartIndex_copy, cartProduct.idx]);
  };

  return (
    <>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        w="100%"
        variant="outline"
      >
        <VStack
          p={5}
          display="flex"
          justifyContent="space-between"
          flexDirection="row"
        >
          <Checkbox
            isChecked={checkedItems[index]}
            onChange={(e) => checkedHandler(e)}
          />
        </VStack>
        <Image
          objectFit="cover"
          maxW={{ base: '100%', sm: '100px' }}
          src={cartProduct.mainImage}
          alt={cartProduct.name}
        />
        <VStack
          w="100%"
          display="flex"
          justifyContent="space-between"
          flexDirection="row"
        >
          <Stack p="5">
            <Heading size="xs" textTransform="uppercase">
              {cartProduct.name}
            </Heading>
            <Stack direction="row">
              <Badge colorScheme="purple">{cartProduct.spaceCategory}</Badge>
              <Badge colorScheme="green">
                {cartProduct.maximumPurchases}개 구매제한
              </Badge>
            </Stack>

            <Text pt="2" fontSize="sm">
              {cartProduct.description}
            </Text>
          </Stack>
          <Stack p="5">
            <NumberInput
              value={productNumber[index]}
              onChange={(value) => inputOnchangeHandler(value)}
              defaultValue={1}
              min={1}
              max={cartProduct.maximumPurchases}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Heading size="xs" textTransform="uppercase">
              {cartProduct.price * productNumber[index]}원
            </Heading>
          </Stack>

          <Stack p="5">
            <IconButton
              aria-label="Search database"
              icon={<DeleteIcon />}
              onClick={() => dispatch(onOpen([cartProduct.idx]))}
            />
          </Stack>
        </VStack>
      </Card>
    </>
  );
};

export default ReservationsList;
