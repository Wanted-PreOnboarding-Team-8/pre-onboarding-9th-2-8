import { HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <HStack gap={1}>
      <Link to="/main">홈</Link>
      <Link to="/reservations">장바구니</Link>
    </HStack>
  );
};
export default Nav;
