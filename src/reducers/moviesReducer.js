import { types } from "../types/types";

 const initialState = {
    search:"Todas",
    selected:[],
    allMovies: {
        movies: [],
        isEnd: false,
        last: null
    },
    modal: null,
    trailer : null,
} 

export const moviesReducer = (state = initialState , action) => {
    switch (action.type) {
        case types.mvSelected:
            return {
                ...state,
                selected: action.payload
            }
        
        case types.mvGetAll:
            return {
                ...state,
                allMovies: action.payload
            }
        
        case types.mvSearch:
            return {
                ...state,
                search: action.payload
            }
        
        case types.mvModal:
            return {
                ...state,
                modal: action.payload
            }
        
        case types.mvTrailer:
            return {
                ...state,
                trailer: action.payload
            }

        default:
            return state;
    }
}