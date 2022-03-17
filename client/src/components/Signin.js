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
            alert('There are empty fields')
        }
    }

    return (
        <div className="Signin">
            <br></br><br></br>
            <h1>Signin</h1>
            <br></br>
            <form onSubmit={e => handleSubmit(e)} >
                <input type="email" name="Email" placeholder="Insert email" value={user.Email} onChange={e => handleChange(e)}></input>
                <br></br>
                <input type="password" name="Password" placeholder="Insert password" value={user.Password} onChange={e => handleChange(e)}></input>
                <br></br><br></br>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Signin