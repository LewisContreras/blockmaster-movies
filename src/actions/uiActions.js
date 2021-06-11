import { types } from "../types/types";

export const setError = (err) => {
    return {
        type: types.uiSetError,
        payload: err
    }
}

export const removeError = () => {
    return {
        type: types.removeError
    }
}

export const startLoading = () => {
    return {
        type: types.uiStartLoading
    }
}

export const finishLoading = () => {
    return {
        type: types.uiFinishLoadig
    }
}

