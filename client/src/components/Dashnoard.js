import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import {decodeToken} from "react-jwt"
import { logout, populateQuote } from "../Redux/Action"


function Dashboard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const userValidate = useSelector((state) => state.userauth)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            const user = decodeToken(token)
            if(!user){
                localStorage.removeItem('token')
                navigate('/')
            }else{
                dispatch(populateQuote(localStorage.getItem('token')))
            }
        }else{
            navigate('/')
        }
    },[])
    
    const handleLogout = () => {
        dispatch(logout())
        const token = localStorage.getItem('token')
        if(token){
            const user = decodeToken(token)
            if(!user){
                localStorage.removeItem('token')
                navigate('/')
            }else{
                dispatch(populateQuote(localStorage.getItem('token')))
            }
        }else{
            navigate('/')
        }
    }

    return (
        <div>
            <br></br><br></br>
            <h1>Welcome to Dashboard {userValidate ? userValidate.quote.Username:null}</h1>
            <br></br><br></br>
            {userValidate ? <div>
                <h2>Id: {userValidate.quote.id}</h2>
                <h2>Name: {userValidate.quote.Username}</h2>
                <h2>Email: {userValidate.quote.Email}</h2>
            </div>:'bye'}
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Dashboard