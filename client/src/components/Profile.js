import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logout } from "../Redux/Action"

function Profile() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userValidate = useSelector((state) => state.userauth)
    
    const handleLogout = () => {
        dispatch(logout())
        navigate('/')
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

export default Profile