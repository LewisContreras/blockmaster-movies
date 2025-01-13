import { Grid } from "@chakra-ui/layout";
import React, { useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieSearch, startMovieSelected } from "../../actions/moviesActions";
import { NothingFound } from "./NothingFound";
import { CardMovie } from "./CardMovie";
import { useMoviesToDisplay } from "../../hooks/useMoviesToDisplay";
import { MOVIE_OPTION_ALL, MOVIE_OPTION_WATCH_LATER } from "../../constants/appConstants";
function CardsContainer() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.movies.search);
  const moviesToDisplay = useMoviesToDisplay(search, useSelector);
  const mounted = useRef(false);
  const observer = useRef();

  useEffect(() => {
    if (!mounted.current) {
      dispatch(movieSearch(search));
      dispatch(startMovieSelected(search));
      dispatch(startMovieSelected(MOVIE_OPTION_WATCH_LATER));
      mounted.current = true;
    }
  }, [dispatch, search]);

  const fetchMoreMovies = useCallback(() => {
    if (search === MOVIE_OPTION_ALL) {
      dispatch(startMovieSelected(search));
    }
  }, [dispatch, search]);

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

  return !moviesToDisplay.length ? (
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
      {moviesToDisplay.map((el, index) => {
        if (index === moviesToDisplay.length - 1) {
          return <CardMovie ref={lastMovieRef} key={el.id} movie={el} />;
        } else {
          return <CardMovie key={el.id} movie={el} />;
        }
      })}
    </Grid>
  );
}

export default CardsContainer;
