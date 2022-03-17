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

    const handleChange = (e) => {
        setuser({
            ...user,
            [e.target.name] : e.target.value
        })
    } 

    const handleSubmit = (e) => {
        e.preventDefault()
        if(user.Username && user.Email && user.Password){
            dispatch(register(user))
            setuser({
                Username: '',
                Email: '',
                Password: ''
            })
        }else{
            alert('There are empty fields')
        }
    }

    return (
        <div className="Signup">
            <br></br><br></br>
            <h1>Signup</h1>
            <br></br>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" name="Username" value={user.Username} placeholder="insert name" onChange={e => handleChange(e)} ></input>
                <br></br>
                <input type="mail" name="Email" value={user.Email} placeholder="insert email" onChange={e => handleChange(e)}></input>
                <br></br>
                <input type="password" name="Password" value={user.Password} placeholder="insert password" onChange={e => handleChange(e)}></input>
                <br></br><br></br>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Signup