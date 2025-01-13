import { useSelector } from "react-redux";
import {
  MOVIE_OPTION_ALL,
  MOVIE_OPTION_MOST_VALUED,
  MOVIE_OPTION_WATCH_LATER,
} from "../constants/appConstants";

export const useMoviesToDisplay = (search) => {
  const allMovies = useSelector((state) => state.movies.allMovies.movies);
  const watchLater = useSelector((state) => state.movies.watchLater);
  const mostValued = useSelector((state) => state.movies.mostValued);
  const selected = useSelector((state) => state.movies.selected);

  if (search === MOVIE_OPTION_ALL) {
    return allMovies;
  } else if (search === MOVIE_OPTION_WATCH_LATER) {
    return watchLater;
  } else if (search === MOVIE_OPTION_MOST_VALUED) {
    return mostValued;
  } else {
    return selected;
  }
};
