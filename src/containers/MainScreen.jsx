import React from "react";
import NavbarMain from "../components/NavbarMain.jsx";
import CardsContainer from "../components/CardsContainer.jsx";
import ModalEachMovie from "../components/ModalEachMovie.jsx";
import SliderMain from "../components/SliderMain.jsx";
import TrailerMovie from "../components/TrailerMovie.jsx";
import TitleSearch from "../components/TitleSearch.jsx";

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
