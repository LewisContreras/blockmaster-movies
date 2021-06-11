import { types } from "../types/types";


const initialState={
    loading:false,
    msjError: null
}

export const registro = (state=initialState, action)=>{
    switch (action.type) {
        case types.uiSetError:
            return{
                ...state,
                msjError:action.payload
            }
        
        case types.uiRemoveError:
            return{
                ...state,
                msjError:null
            }
        
        case types.uiStartLoading:
            return{
                ...state,
                loading:true
            }
        
        case types.uiFinishLoadig:
            return{
                ...state,
                loading:false
            }
    
        default:
            return state
    }
}