import { useEffect } from "react"
import { useDispatch } from "react-redux"
import {decodeToken} from "react-jwt"
import { populateQuote } from "../Redux/Action"
import {Route, Routes} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import Profile from "../components/Profile"

function Dashboard() {
    // const navigate = useNavigate()
    const dispatch = useDispatch()
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(window.location.pathname.includes('/dashboard')){
            if(token){
                const user = decodeToken(token)
                if(!user){
                    localStorage.removeItem('token')
                    window.location.href = '/home'   
                }else{
                    dispatch(populateQuote(localStorage.getItem('token')))
                }
            }else{
                window.location.href = '/home'
            }
        }
    },[])

    return (
        <div>
        <Router>
            <Routes>
                <Route path='/dashboard' element={<Profile/>} />
                <Route path='/dashboard/profile' element={<Profile/>} />
            </Routes>
        </Router>
        </div>
    )
}

export default Dashboard