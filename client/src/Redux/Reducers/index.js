import { LOGIN, LOGOUT, QUOTE, REGISTER } from "../Action/types"

const initialState = {
    user : []
}

function rootReducer(state = initialState, {type, payload}){
    switch(type){
        case REGISTER:
            return{
                ...state,
                user : payload.auth
            }
        
        case LOGIN:
            return {
                ...state,
                token: payload
            }
        
        case QUOTE:
            return {
                ...state,
                userauth : payload
            }     
        default:
            
        case LOGOUT:
            return{
                ...state,
                token: null,
                userauth: null
            }
        return state
    }
}

export default rootReducer