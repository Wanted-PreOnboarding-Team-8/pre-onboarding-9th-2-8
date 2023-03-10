import Router from '@/Router';
import Nav from './components/Nav';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from '@/store/index';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <BrowserRouter>
          <Nav />
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  );
};

export default App;
