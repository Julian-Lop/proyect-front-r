import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link} from 'react-router-dom'
import '../css/styles.css'
import { setRecharge } from "../Redux/Action";
import DropdownMenu from "./DropdownMenu"

function Navbar() {
    const dispatch = useDispatch()

    const valid = useSelector((state) => state.recharge)

    const handleDropmenu = () => {
        if(document.querySelector('.DropdownMenuHide')){
            const menu = document.querySelector('.DropdownMenuHide')
            menu.classList.remove('DropdownMenuHide')
            menu.classList.add('DropdownMenu')
        }else{
            const menu = document.querySelector('.DropdownMenu')
            menu.classList.remove('DropdownMenu')
            menu.classList.add('DropdownMenuHide')
        }
    }

    useEffect(() => {
        if(valid){dispatch(setRecharge())}
    },[valid])

    return(
        <div>
            <div className="Navbar">
                <div>
                    <div>
                        <Link to='/'><h3>HOME <i class="fas fa-store"></i></h3></Link>
                    </div>
                    <div>
                        {!localStorage.getItem('token') ? <Link to='/signin'><h3>SIGNIN <i class="fas fa-user"></i></h3></Link>: <span onClick={handleDropmenu}>PROFILE <i class="fas fa-user-circle"></i></span>}
                    </div>
                    {!localStorage.getItem('token') ?<div> <Link to='/signup'><h3>SIGNUP <i class="fas fa-user-plus"></i></h3></Link> </div>: null}
                </div>
            </div>
            <DropdownMenu/>
        </div>
    )
}

export default Navbar