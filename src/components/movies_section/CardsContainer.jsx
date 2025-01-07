import { Grid } from "@chakra-ui/layout";
import React from "react";
import { useSelector } from "react-redux";
import NothingFound from "./NothingFound.jsx";
import "../../styles/animations.css";
import { CardMovie } from "./CardMovie.jsx";

function CardsContainer() {
  const selectedMovies = useSelector((state) => state.movies.selected);

  return !selectedMovies.length ? (
    <NothingFound />
  ) : (
    <Grid
      pb="70px"
      className="scene_element scene_element--fadeinup"
      templateColumns={["repeat(auto-fill,150px)", "repeat(auto-fill,220px)"]}
      gap={["5px", "10px"]}
      px={["0", "30px"]}
      mt="20px"
      justifyContent={["space-evenly", "space-between"]}
    >
      {selectedMovies.map((el, index) => (
        <CardMovie key={index} movie={el} />
      ))}
    </Grid>
  );
}

export default CardsContainer;
