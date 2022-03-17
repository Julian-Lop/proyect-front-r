import axios from 'axios'
import {REGISTER,LOGIN, QUOTE, LOGOUT} from './types'


export const register = (user) => {
    return async function(dispatch){
        let json = await axios.post('http://localhost:3001/register', user)
        alert(json.data.message)
        return dispatch({type: 'REGISTER', payload: json.data})
    }
}

export const login = (user) => {
    return async function(dispatch){
        let json = await axios.post('http://localhost:3001/login', user)
        if(json.data.token)localStorage.setItem('token',json.data.token)
        alert(json.data.message)
        return dispatch({type: LOGIN, payload: json.data})
    }
}

export const populateQuote = (token) => {
    return async function(dispatch){
        let json = await axios('http://localhost:3001/quote', {headers:{'x-access-token':token}})
        return dispatch({type: QUOTE, payload: json.data})
    }
}

export const logout = () => {
    return function(dispatch){
        localStorage.clear()
        return dispatch({type: LOGOUT})
    }
}