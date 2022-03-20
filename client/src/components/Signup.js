import React, { useState } from "react"
import {useDispatch} from 'react-redux'
import { register } from "../Redux/Action"


function Signup() {
    const dispatch = useDispatch()

    const [user, setuser] = useState({
        Username: null,
        Email: null,
        Password: null,
    })

    const [verificationP, setverificationP] = useState()

    const handleChange = (e) => {
        setuser({
            ...user,
            [e.target.name] : e.target.value
        })
    } 

    const comparePasswords = () => {
        if(verificationP === user.Password){
            return true
        }
        return false
    }

    const handlePasswordVerification = (e) => {
        setverificationP(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const verifiedPassword = comparePasswords()
        if(!verifiedPassword){return alert('please verify the passwords')}
        if(user.Username && user.Email && user.Password){
            dispatch(register(user))
            setuser({
                Username: '',
                Email: '',
                Password: ''
            })
            setverificationP('')
        }else{
            const alert = document.querySelector('.AlertHide')
            alert.classList.remove('AlertHide')
            alert.classList.add('Alert')
        }
    }

    const handleExit = () => {
        const alert = document.querySelector('.Alert')
        alert.classList.remove('Alert')
        alert.classList.add('AlertHide')
    }

    return (
        <div className="Signup">
            <h1>Signup</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" name="Username" value={user.Username} placeholder="insert name" onChange={e => handleChange(e)} ></input>
                
                <input type="mail" name="Email" value={user.Email} placeholder="insert email" onChange={e => handleChange(e)}></input>
                
                <input type="password" name="Password" value={user.Password} placeholder="insert password" onChange={e => handleChange(e)}></input>
                
                <input type="password" name="passwordVerification" value={verificationP} placeholder="insert the password again" onChange={e => handlePasswordVerification(e)}></input>
                
                <button type="submit">Send</button>
            </form>

            <div className="AlertHide"><div><h1>There are empty fields</h1><button onClick={handleExit}><i class="fas fa-window-close"></i></button></div></div>
        </div>
    )
}

export default Signup