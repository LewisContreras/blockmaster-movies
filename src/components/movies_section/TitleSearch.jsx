import { Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useMoviesToDisplay } from "../../hooks/useMoviesToDisplay";

const TitleSearch = () => {
  const search = useSelector((state) => state.movies.search);
  const selected = useMoviesToDisplay(search);
  let textSearch = "";
  if (search === "" || (!!search && !selected.length)) {
    textSearch = "";
  } else if (search === "Todas") {
    textSearch = search + " las películas";
  } else if (search === "Más valoradas") {
    textSearch = "Películas " + search.toLowerCase();
  } else if (search === "Ver después") {
    textSearch = "Películas para " + search.toLowerCase();
  }
  else {
    textSearch = `"${search}"`;
  }

  return (
    <Box px="22px" py="14px" fontSize="3xl" fontWeight="600">
      {textSearch}
    </Box>
  );
};

export default TitleSearch;
