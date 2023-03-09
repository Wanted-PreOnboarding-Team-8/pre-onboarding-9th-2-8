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
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { IProduct } from '@/interface/product';

const ReservationsList = (cartProduct: IProduct) => {
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
            <Heading size="xs" textTransform="uppercase">
              {cartProduct.price}
            </Heading>
          </Stack>
          <Stack p="5">
            <Text pt="2" fontSize="sm">
              <IconButton aria-label="Search database" icon={<DeleteIcon />} />
            </Text>
          </Stack>
        </VStack>
      </Card>
    </>
  );
};

export default ReservationsList;
