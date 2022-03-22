import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from 'react-router-dom'
import { editProfile } from "../Redux/Action"

function EditProfile() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userValidate = useSelector((state) => state.userauth)
    const message = useSelector((state) => state.message)

    const [user, setuser] = useState({
        id:null,
        Username:null,
        Email:null,
        Location:null,
        Password:null,
    })

    useEffect(()=>{
        setuser({
            id:userValidate.quote.id,
            Username:userValidate.quote.Username,
            Email:userValidate.quote.Email,
            Location:userValidate.quote.Location
        })
    },[userValidate])

    const handleChangeUser = (e) => {
        setuser({...user,
        [e.target.name]:e.target.value})
    }

    const handleSubmitUserEdited = () => {
        if(user.Email && user.Location && user.Username){
            dispatch(editProfile(user))
            const success = document.querySelector('.AlertSuccessHide')
            success.classList.remove('AlertSuccessHide')
            success.classList.add('AlertSuccess')
        }else{
            const alert = document.querySelector('.AlertHide')
            alert.classList.remove('AlertHide')
            alert.classList.add('Alert')
        }
    } 

    const handleExit = () => {
        const alert = document.querySelector('.Alert')
        const succ = document.querySelector('.AlertSuccess')

        if(alert){
            alert.classList.remove('Alert')
            alert.classList.add('AlertHide')
        }else if(succ){
            succ.classList.remove('AlertSuccess')
            succ.classList.add('AlertSuccessHide')
        }
        navigate('/dashboard/profile')
    }

    return (
        <div>
            <div className="EditProfile">
                <div>
                    <h1>Edit your profile {userValidate ? userValidate.quote.Username:null}</h1>
                    {userValidate ? 
                    <div>
                        <div className="ProfileImage">
                            <i class="fas fa-user"></i>
                        </div>
                        <div className="Row">
                            <div>
                                <label>Name</label>
                                <input type="tex" name="Username" value={user.Username} placeholder="insert the new name" onChange={e => handleChangeUser(e)}></input>
                                <label>Location</label>
                                <input type="tex" name="Location" value={user.Location} placeholder="insert the new Location" onChange={e => handleChangeUser(e)} ></input>
                                <label>Email</label>
                                <input type="tex" name="Email" value={user.Email} placeholder="insert the new email" onChange={e => handleChangeUser(e)} ></input>
                            </div>
                        </div>
                        <button onClick={handleSubmitUserEdited}><i class="fas fa-check"></i></button>
                        <Link to="/dashboard/profile"><button><i class="fas fa-window-close"></i></button></Link>
                    </div>
                    :'bye'}
                    
                </div>
            </div>
            <div className="AlertSuccessHide"><h1>{message}</h1><button onClick={handleExit}><i class="fas fa-window-close"></i></button></div>
            <div className="AlertHide"><div><h1>There are empty fields</h1><button onClick={handleExit}><i class="fas fa-window-close"></i></button></div></div>
        </div>
    )
}

export default EditProfile