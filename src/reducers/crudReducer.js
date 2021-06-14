import { types } from "../types/types";

 const initialState = {
    search:"",
} 

export const crudReducer = (state = initialState , action) => {
    switch (action.type) {
        case types.crSearch:
            return {
                ...state,
                search: action.payload
            }

        default:
            return state;
    }
}