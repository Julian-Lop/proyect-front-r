import axios from 'axios'
import {REGISTER,LOGIN, QUOTE, LOGOUT, SETRECHARGE, EDITPROFILE} from './types'


export const register = (user) => {
    return async function(dispatch){
        let json = await axios.post('http://localhost:3001/register', user)
        return dispatch({type: 'REGISTER', payload: json.data, message:json.data.message})
    }
}

export const login = (user) => {
    return async function(dispatch){
        let json = await axios.post('http://localhost:3001/login', user)
        if(json.data.token)localStorage.setItem('token',json.data.token)
        return dispatch({type: LOGIN, payload: json.data, message:json.data.message})
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

export const setRecharge = () => {
    return function(dispatch){
        return dispatch({type: SETRECHARGE})
    }
}

export const editProfile = (user) => {
    return async function(dispatch){
        let json = await axios.put('http://localhost:3001/setuser', user)
        return dispatch({type:EDITPROFILE, payload:json.data.useredit, message:json.data.message})
    }
}