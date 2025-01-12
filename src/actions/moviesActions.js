import { types } from "../types/types";
import { getMovie, getAllMovies, getWatchLater, getMostValued } from "../helpers/goSearchMovies";

export const movieSearch = (categorie) => {
  return {
    type: types.mvSearch,
    payload: categorie,
  };
};

export const startMovieSelected = (category) => {
  return async (dispatch, getState) => {
    if (category === "Todas") {
      const { movies, last, isEnd } = getState().movies.allMovies;
      if (isEnd) return;
      const moviesInfo = await getAllMovies(movies, last);
      dispatch(movieGetAll(moviesInfo));
    } else if (category === "Ver después") {
      const uid = getState().auth.uid;
      const watchLater = getState().movies.watchLater;
      if (watchLater.length) return;
      const movies = await getWatchLater(uid);
      dispatch(movieWatchLater(movies));
    } else if (category === "Más valoradas"){
      const mostValued = getState().movies.mostValued;
      if (mostValued.length) return;
      const movies = await getMostValued();
      dispatch(movieMostValued(movies));
    } else {
      const movies = await getMovie(category);
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

export const movieWatchLater = (movies) => {
  return {
    type: types.mvWatchLater,
    payload: movies,
  };
}

export const movieMostValued = (movies) => {
  return {
    type: types.mvMostValued,
    payload: movies,
  };
}