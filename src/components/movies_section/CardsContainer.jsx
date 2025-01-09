import { Grid } from "@chakra-ui/layout";
import React, { useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieSearch, startMovieSelected } from "../../actions/moviesActions";
import { NothingFound } from "./NothingFound";
import { CardMovie } from "./CardMovie";

function CardsContainer() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.movies.search);
  const selectedMovies = useSelector((state) => state.movies.selected);
  const lastDoc = useSelector((state) => state.movies.last);
  const mounted = useRef(false);
  const observer = useRef();

  useEffect(() => {
    if (!mounted.current) {
      dispatch(movieSearch(search));
      dispatch(startMovieSelected(search));
      mounted.current = true;
    }
  }, [dispatch, search]);

  const fetchMoreMovies = useCallback(() => {
    if (search === "Todas") {
      dispatch(startMovieSelected(search, lastDoc));
    }
  }, [dispatch, search, lastDoc]);

  const lastMovieRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          fetchMoreMovies();
        }
      });
      if (node) observer.current.observe(node);
    },
    [fetchMoreMovies]
  );

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
      {selectedMovies.map((el, index) => {
        if (index === selectedMovies.length - 1) {
          return <CardMovie ref={lastMovieRef} key={el.id} movie={el} />;
        } else {
          return <CardMovie key={el.id} movie={el} />;
        }
      })}
    </Grid>
  );
}

export default CardsContainer;
