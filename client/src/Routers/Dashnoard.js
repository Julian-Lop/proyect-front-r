import { useEffect } from "react"
import { useDispatch} from "react-redux"
import {decodeToken} from "react-jwt"
import { populateQuote } from "../Redux/Action"
import {Route, Routes, useNavigate} from 'react-router-dom'
import Profile from "../components/Profile"
import Navbar from "../components/Navbar"
import Cart from "../components/Cart"
import EditProfile from "../components/EditProfile"

function Dashboard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(window.location.pathname.includes('/dashboard')){
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
    },[])

    

    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path='/dashboard' element={<Cart/>}/>
                <Route path='/dashboard/reservations' element={<Cart/>} />
                <Route path='/dashboard/purchasemades' element={<Cart/>} />
                <Route path='/dashboard/profile' element={<Profile/>}/>
                <Route path='/dashboard/editprofile' element={<EditProfile/>}/>
            </Routes>
        </div>
    )
}

export default Dashboard