import { types } from "../types/types";
import { goSearchMovies } from "../helpers/goSearchMovies";

export const movieSearch = (categorie) => {
  return {
    type: types.mvSearch,
    payload: categorie,
  };
};

export const startMovieSelected = (categorie) => {
  return async (dispatch, getState) => {
    const last = getState().movies.last;
    const selected = getState().movies.selected;
    const uid = getState().auth.uid;
    const { movies, last: lasted } = await goSearchMovies(
      categorie,
      selected,
      last,
      uid
    );

    dispatch(movieLastDoc(lasted));

    dispatch(movieSelected(movies));
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

export const movieLastDoc = (doc) => {
  return {
    type: types.mvLastDoc,
    payload: doc,
  };
};

export const movieTrailer = (movie) => {
  return {
    type: types.mvTrailer,
    payload: movie,
  };
};
