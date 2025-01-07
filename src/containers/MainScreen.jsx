import React from "react";
import NavbarMain from "../components/navbar/NavbarMain.jsx";
import CardsContainer from "../components/movies_section/CardsContainer.jsx";
import ModalEachMovie from "../components/movies_section/ModalEachMovie.jsx";
import SliderMain from "../components/slider/SliderMain.jsx";
import TrailerMovie from "../components/slider/TrailerMovie.jsx";
import TitleSearch from "../components/movies_section/TitleSearch.jsx";

function MainScreen() {
  return (
    <>
      <NavbarMain />
      <SliderMain />
      <TitleSearch />
      <CardsContainer />
      <ModalEachMovie />
      <TrailerMovie />
    </>
  );
}

export default MainScreen;
