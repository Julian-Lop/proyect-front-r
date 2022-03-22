import React, { useState } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { register } from "../Redux/Action"


function Signup() {
    const dispatch = useDispatch()

    const message = useSelector((state) => state.message)

    const [user, setuser] = useState({
        Username: null,
        Email: null,
        Password: null,
    })

    const [verificationP, setverificationP] = useState()

    const [messagetwo, setmessagetwo] = useState()

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
        if(!verifiedPassword){
            setmessagetwo('Please verify the passwords')
            const alert = document.querySelector('.AlertHide')
            alert.classList.remove('AlertHide')
            alert.classList.add('Alert')
            return null
        }
        if(user.Username && user.Email && user.Password){
            dispatch(register(user))
            const success = document.querySelector('.AlertSuccessHide')
            success.classList.remove('AlertSuccessHide')
            success.classList.add('AlertSuccess')
            setuser({
                Username: '',
                Email: '',
                Password: ''
            })
            setverificationP('')
        }else{
            setmessagetwo('There are empty fields')
            const alert = document.querySelector('.AlertHide')
            alert.classList.remove('AlertHide')
            alert.classList.add('Alert')
        }
    }

    const handleExit = () => {
        const alert = document.querySelector('.Alert')
        const succ = document.querySelector('.AlertSuccess')

        if(alert){
            alert.classList.remove('Alert')
            alert.classList.add('AlertHide')
        }else if(succ){
            succ.classList.remove('AlertSuccess')
            succ.classList.add('AlertSuccessHide')
        }    
    }

    return (
        <div>
            <div className="Signup">
                <h1>Signup</h1>
                <form onSubmit={e => handleSubmit(e)}>
                    <label>Name</label>
                    <input type="text" name="Username" value={user.Username} placeholder="insert name" onChange={e => handleChange(e)} ></input>
                    <label>Email</label>
                    <input type="mail" name="Email" value={user.Email} placeholder="insert email" onChange={e => handleChange(e)}></input>
                    <label>Password</label>
                    <input type="password" name="Password" value={user.Password} placeholder="insert password" onChange={e => handleChange(e)}></input>
                    <label>Re-insert password</label>
                    <input type="password" name="passwordVerification" value={verificationP} placeholder="insert the password again" onChange={e => handlePasswordVerification(e)}></input>
                    <button type="submit">Send</button>
                </form>
                <div className="AlertHide"><div><h1>{messagetwo}</h1><button onClick={handleExit}><i class="fas fa-window-close"></i></button></div></div>
            </div>
            <div className="AlertSuccessHide"><h1>{message}</h1><button onClick={handleExit}><i class="fas fa-window-close"></i></button></div>
        </div>
    )
}

export default Signup