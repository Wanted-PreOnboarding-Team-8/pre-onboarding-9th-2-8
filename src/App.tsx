import Router from './Router';
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {
  return (
    <div className="App">
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </div>
  );
};

export default App;
