import { useSelector } from 'react-redux';

export const useMoviesToDisplay = (search) => {
  const allMovies = useSelector((state) => state.movies.allMovies.movies);
  const watchLater = useSelector((state) => state.movies.watchLater);
  const mostValued = useSelector((state) => state.movies.mostValued);
  const selected = useSelector((state) => state.movies.selected);

  if (search === "Todas") {
    return allMovies;
  } else if (search === "Ver después") {
    return watchLater;
  } else if (search === "Más valoradas") {
    return mostValued;
  } else {
    return selected;
  }
};
