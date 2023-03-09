import Router from '@/Router';
import Nav from './components/Nav';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from '@/store/index';

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Nav />
        <Router />
      </ChakraProvider>
    </Provider>
  );
};

export default App;
