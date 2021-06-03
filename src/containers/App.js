import { ChakraProvider } from '@chakra-ui/react';
import NavbarMain from '../components/NavbarMain';
import SliderMain from '../components/SliderMain';
import theme from "../styles/theme"

function App() {
  return (
    <ChakraProvider theme={theme} >
      <NavbarMain/>
      <SliderMain/>
    </ChakraProvider>
  );
}

export default App;
