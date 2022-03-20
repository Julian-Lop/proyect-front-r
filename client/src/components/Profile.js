import { useSelector } from "react-redux"

function Profile() {
    const userValidate = useSelector((state) => state.userauth)

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
        </div>
    )
}

export default Profile