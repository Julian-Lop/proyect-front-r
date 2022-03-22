import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Profile() {
    const userValidate = useSelector((state) => state.userauth)

    return (
        <div className="Profile">
            <div>
                <h1>Welcome to Profile {userValidate ? userValidate.quote.Username:null}</h1>
                {userValidate ? 
                <div>
                    <div className="ProfileImage">
                        <i class="fas fa-user"></i>
                    </div>
                    <div className="Row">
                        <div>
                            <h2>Info User</h2>
                            <h3>Id: {userValidate.quote.id}</h3>
                            <h3>Name: {userValidate.quote.Username}</h3>
                            <h3>Email: {userValidate.quote.Email}</h3>
                        </div>
                        <div>
                            <h2>Location</h2>
                            <h3>Neighbordhood {userValidate.quote.Location}</h3>
                        </div>
                    </div>
                    <Link to="/dashboard/editprofile"> <button><i class="fas fa-user-cog"></i></button></Link>
                </div>
                :'bye'}
                
            </div>
            <br></br>
        </div>
    )
}

export default Profile