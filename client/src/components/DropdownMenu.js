import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from "../Redux/Action";
import '../css/styles.css'

function DropdownMenu() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout())
        const menu = document.querySelector('.DropdownMenu')
        menu.classList.remove('DropdownMenu')
        menu.classList.add('DropdownMenuHide')
        navigate('/')
    }

    const handleChangeDropmenu = () => {
        const menu = document.querySelector('.DropdownMenu')
        menu.classList.remove('DropdownMenu')
        menu.classList.add('DropdownMenuHide')
    }

    return (
    <div className='DropdownMenuHide'>
        <ul>
        <Link to="/dashboard"> <li onClick={handleChangeDropmenu}>Cart <i class="fas fa-shopping-cart"></i></li></Link>
            <Link to="/dashboard/profile"> <li onClick={handleChangeDropmenu}>Profile <i class="fas fa-user"></i></li></Link>
            <li onClick={handleLogout}>Logout <i class="fas fa-sign-out-alt"></i></li>
        </ul>
    </div>)
}

export default DropdownMenu