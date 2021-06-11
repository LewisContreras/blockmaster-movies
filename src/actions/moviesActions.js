import { types } from "../types/types";
import {db} from "../firebase/firebase-config"
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
        const movies = await goSearchMovies(categorie)
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