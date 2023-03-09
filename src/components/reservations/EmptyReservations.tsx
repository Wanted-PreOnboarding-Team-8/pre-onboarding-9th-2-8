import { Center, Stack, VStack, Text, Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const EmptyReservations = () => {
  return (
    <Center as="main" w="100%">
      <VStack as="section" w="75%" minW="500px" p={4}>
        <Stack display="flex">
          <Text>장바구니가 비었습니다.</Text>
          <Link to="/main">
            <Button colorScheme="teal" variant="solid">
              홈으로 가기
            </Button>
          </Link>
        </Stack>
      </VStack>
    </Center>
  );
};

export default EmptyReservations;
