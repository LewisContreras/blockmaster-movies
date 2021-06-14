import { types } from "../types/types";
import { goSearchMovies } from "../helpers/goSearchMovies";

export const movieSearch = (categorie) => {
    return {
        type: types.mvSearch,
        payload: categorie
    }
}

export const startMovieSelected = (categorie) => {
    console.log(categorie);
    return async (dispatch,getState) => {
        const search = getState().movies.search
        const last = getState().movies.last
        const selected = getState().movies.selected
        const {movies,last:lasted} = await goSearchMovies(categorie,selected,last)

        dispatch(movieLastDoc(lasted))

        dispatch(movieSelected(movies))
        
    }

}

export const movieSelected = (selected) => {
    return {
        type: types.mvSelected,
        payload: selected
    }
}

export const movieModal = (movie) => {
    return {
        type: types.mvModal,
        payload: movie
    }
}

export const movieLastDoc = (doc) => {
    return {
        type: types.mvLastDoc,
        payload: doc
    }
}

export const movieTrailer = (movie) => {
    return {
        type: types.mvTrailer,
        payload: movie
    }
}