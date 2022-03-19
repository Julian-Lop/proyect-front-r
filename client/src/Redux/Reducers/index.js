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
        
            
        case LOGOUT:
            return{
                ...state,
                token: null,
                userauth: null
            }

        default:    
        return state
    }
}

export default rootReducer