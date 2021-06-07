import { ChakraProvider } from '@chakra-ui/react';
import CardsContainer from '../components/CardsContainer';
// import EachMovieCard from '../components/EachMovieCard';
// import ModalEachMovie from '../components/ModalEachMovie';
// import NothingFound from '../components/NothingFound';
// import SliderMain from '../components/SliderMain';
import theme from "../styles/theme"
import NavbarMain from '../components/NavbarMain';

function App() {
  return (
    <ChakraProvider theme={theme} >
      <NavbarMain/>
      {/* <SliderMain/> */}
      {/* <NothingFound/> */}
      {/* <EachMovieCard/> */}
      <CardsContainer/>
      {/* <ModalEachMovie/> */}
    </ChakraProvider>
  );
}

export default App;
