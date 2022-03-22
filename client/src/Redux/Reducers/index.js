import { EDITPROFILE, LOGIN, LOGOUT, QUOTE, REGISTER, SETRECHARGE } from "../Action/types"

const initialState = {
    user : [],
    recharge : false,
    message: 'anything'
}

function rootReducer(state = initialState, {type, payload, message}){
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
                recharge: false,
                message: message
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

        case EDITPROFILE:
            const newauth = state.userauth
            newauth.quote = payload
            return {
                ...state,
                userauth : newauth,
                message : message
            }    
        default:    
        return state
    }
}

export default rootReducer