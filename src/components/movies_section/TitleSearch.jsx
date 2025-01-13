import { Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useMoviesToDisplay } from "../../hooks/useMoviesToDisplay";
import {
  MOVIE_OPTION_ALL,
  MOVIE_OPTION_MOST_VALUED,
  MOVIE_OPTION_WATCH_LATER,
} from "../../constants/appConstants";

const TitleSearch = () => {
  const search = useSelector((state) => state.movies.search);
  const selected = useMoviesToDisplay(search);
  let textSearch = "";
  if (search === "" || (!!search && !selected.length)) {
    textSearch = "";
  } else if (search === MOVIE_OPTION_ALL) {
    textSearch = search + " las películas";
  } else if (search === MOVIE_OPTION_MOST_VALUED) {
    textSearch = "Películas " + search.toLowerCase();
  } else if (search === MOVIE_OPTION_WATCH_LATER) {
    textSearch = "Películas para " + search.toLowerCase();
  } else {
    textSearch = `"${search}"`;
  }

  return (
    <Box px="22px" py="14px" fontSize="3xl" fontWeight="600">
      {textSearch}
    </Box>
  );
};

export default TitleSearch;
