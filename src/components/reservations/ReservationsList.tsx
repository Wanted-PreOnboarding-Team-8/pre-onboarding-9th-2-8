import React from 'react';
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
  useDisclosure,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { IReservationsList } from '@/interface/props';
import DeleteDiallog from './DeleteDiallog';

const ReservationsList = ({
  cartProduct,
  index,
  productNumber,
  setProductNumber,
}: IReservationsList) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const inputOnchangeHandler = (value: string) => {
    const productNumber_copy = [...productNumber];
    productNumber_copy.splice(index, 1, Number(value));
    setProductNumber([...productNumber_copy]);
  };

  return (
    <>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        w="100%"
        variant="outline"
      >
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
              onClick={onOpen}
            />
          </Stack>
        </VStack>
      </Card>

      <DeleteDiallog isOpen={isOpen} onClose={onClose} id={cartProduct.idx} />
    </>
  );
};

export default ReservationsList;
