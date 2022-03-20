import { LOGIN, LOGOUT, QUOTE, REGISTER, SETRECHARGE } from "../Action/types"

const initialState = {
    user : [],
    recharge : false
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
                token: payload,
                recharge: false
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
                userauth: null,
                recharge: true
            }
        
        case SETRECHARGE:
            return {
                ...state,
                recharge: false
            }
        default:    
        return state
    }
}

export default rootReducer