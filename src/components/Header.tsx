import { Flex, Text } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <Flex align="center" justify="space-around" p={4} maxW='600px' m='auto' borderBottom='1px'>
      <Link to="/main">
        <Text
          fontSize="4xl"
          color={pathname === '/main' ? 'blue.500' : 'gray.500'}
        >
          여행 상품
        </Text>
      </Link>
      <Link to="/reservations">
        <Text
          fontSize="4xl"
          color={pathname === '/reservations' ? 'blue.500' : 'gray.500'}
        >
          장바 구니
        </Text>
      </Link>
    </Flex>
  );
};

export default Header;
