import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../Redux/Action"

function Signin(){
    const dispatch = useDispatch()

    const authentic = useSelector((state) => state.token)

    useEffect(() => {
        if(authentic){
            if(authentic.auth === true){
                setuser({
                    Email:'',
                    Password:''
                })
                window.location.href = '/dashboard'
            }
        }
        
    },[authentic])

    const [user, setuser] = useState({
        Email:null,
        Password:null
    })

    const handleChange = (e) => {
        setuser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(user.Email && user.Password){
            dispatch(login(user))
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
        <div className="Signin">
            <h1>Signin</h1>
            <form onSubmit={e => handleSubmit(e)} >
                <input type="email" name="Email" placeholder="Insert email" value={user.Email} onChange={e => handleChange(e)}></input>
                <input type="password" name="Password" placeholder="Insert password" value={user.Password} onChange={e => handleChange(e)}></input>
                <button type="submit">Send</button>
            </form>
            <div className="AlertHide"><div><h1>There are empty fields</h1><button onClick={handleExit}><i class="fas fa-window-close"></i></button></div></div>
        </div>
    )
}

export default Signin