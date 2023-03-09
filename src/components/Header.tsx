import { Tabs, TabList, Tab, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Tabs>
      <TabList justifyContent="center">
        <Tab>
          <Link to="/main">
            <Text fontSize="4xl">여행 상품</Text>
          </Link>
        </Tab>
        <Tab>
          <Link to="/reservations">
            <Text fontSize="4xl">장바 구니</Text>
          </Link>
        </Tab>
      </TabList>
    </Tabs>
  );
};

export default Header