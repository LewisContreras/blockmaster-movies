import { act } from "react-dom/test-utils";
import { types } from "../types/types";

 const initialState = {
    search:"Todas",
    selected:[],
    modal: null,
    last : null
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

        default:
            return state;
    }
}