import { ChakraProvider } from '@chakra-ui/react';
import { store } from '../store/store';
import { Provider } from 'react-redux';

import theme from "../styles/theme"
import { AppRouter } from '../routers/AppRouter';




function App() {
  return (
    <Provider store={store} >
      <ChakraProvider theme={theme} >
        <AppRouter/>
    </ChakraProvider>
    </Provider>
  );
}

export default App;
