import Router from './Router';
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {
  return (
    <ChakraProvider>
      <div className="App">
        <Router />
      </div>
    </ChakraProvider>
  );
};

export default App;
