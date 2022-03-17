import React from "react"
import Signin from "./Signin"
import Signup from "./Signup"

function Home() {
    return (
        <div className="Home">
            <br></br><br></br><br></br><br></br>
            {!localStorage.getItem('token') ? <Signup/>: 'you are already login'}
            <br></br><br></br><br></br><br></br>
            {!localStorage.getItem('token') ? <Signin/>: 'you are already login'}
        </div>
    )
}

export default Home