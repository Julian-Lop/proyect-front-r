import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setRecharge } from "../Redux/Action"
import Navbar from "./Navbar"
import SectionIntro from "./SectionIntro"

function Home() {
    const dispatch = useDispatch()
    const tok = localStorage.getItem('token')

    useEffect(() => {
        if(!tok){
            dispatch(setRecharge())
        }
    },[tok])

    return (
        <div className="Home">
            <Navbar/>
            <SectionIntro/>
        </div>
    )
}

export default Home