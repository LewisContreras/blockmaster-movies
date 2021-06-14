import { types } from "../types/types";

export const crudSearch = (movie) => {
    return {
        type: types.crSearch,
        payload: movie
    }
}