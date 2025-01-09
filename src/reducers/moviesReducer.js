import { types } from "../types/types";

 const initialState = {
    search:"Todas",
    selected:[],
    modal: null,
    last : null,
    trailer : null,
    isEnd : false
} 

export const moviesReducer = (state = initialState , action) => {
    switch (action.type) {
        case types.mvSelected:
            return {
                ...state,
                selected: action.payload
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
        
        case types.mvLastDoc:
            return {
                ...state,
                last: action.payload
            }
        
        case types.mvTrailer:
            return {
                ...state,
                trailer: action.payload
            }

        case types.mvIsEnd:
            return {
                ...state,
                isEnd: action.payload
            }

        default:
            return state;
    }
}