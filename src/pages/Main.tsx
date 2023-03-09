import { Box, Center, Tabs, TabList, Tab, Text } from '@chakra-ui/react';
import ProductList from '@/components/ProductList';
import ProductModal from '@/components/ProductModal';

const Main = () => {
  return (
    <>
      <Center>
        <Box maxWidth="container.sm" mx="auto" px={4}>
          <Tabs>
            <TabList justifyContent="center">
              <Tab>
                <Text fontSize="4xl">여행 상품</Text>
              </Tab>
              <Tab>
                <Text fontSize="4xl">장바 구니</Text>
              </Tab>
            </TabList>
          </Tabs>
          <ProductList />
        </Box>
      </Center>

      <ProductModal />
    </>
  );
};
export default Main;
