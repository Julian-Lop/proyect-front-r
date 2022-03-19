import React from "react";
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import '../css/styles.css'
import { logout } from "../Redux/Action";

function Navbar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout())
        navigate('/')
    }

    return(
        <div className="Navbar">
            <div>
                <div>
                    <Link to='/'><h3>HOME <i class="fas fa-home"></i></h3></Link>
                </div>
                <div>
                    {!localStorage.getItem('token') ? <Link to='/signin'><h3>SIGNIN <i class="fas fa-user"></i></h3></Link>: <span onClick={handleLogout}>LOGOUT <i class="fas fa-sign-out-alt"></i></span>}
                </div>
                
                {!localStorage.getItem('token') ?<div> <Link to='/signup'><h3>SIGNUP <i class="fas fa-user-plus"></i></h3></Link> </div>: null}
                
            </div>
        </div>
    )
}

export default Navbar