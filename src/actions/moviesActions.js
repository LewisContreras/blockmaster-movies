import { types } from "../types/types";
import { goSearchMovies, getAllMovies } from "../helpers/goSearchMovies";

export const movieSearch = (categorie) => {
  return {
    type: types.mvSearch,
    payload: categorie,
  };
};

export const startMovieSelected = (category) => {
  return async (dispatch, getState) => {
    const { selected } = getState().movies;
    const { movies, last, isEnd } = getState().movies.allMovies;
    const uid = getState().auth.uid;
    if (category === "Todas") {
      if (isEnd) return;
      const moviesInfo = await getAllMovies(movies, last);
      dispatch(movieGetAll(moviesInfo));
    } else {
      const movies = await goSearchMovies(category, selected, uid);
      dispatch(movieSelected(movies));
    }
  };
};

export const movieSelected = (selected) => {
  return {
    type: types.mvSelected,
    payload: selected,
  };
};

export const movieModal = (movie) => {
  return {
    type: types.mvModal,
    payload: movie,
  };
};

export const movieTrailer = (movie) => {
  return {
    type: types.mvTrailer,
    payload: movie,
  };
};

export const movieGetAll = (movies) => {
  return {
    type: types.mvGetAll,
    payload: movies,
  };
};
