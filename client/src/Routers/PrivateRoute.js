import { decodeToken } from 'react-jwt';
import { Navigate } from 'react-router-dom';


export const PrivateRoute = ({ children }) => {

    const token = localStorage.getItem('token')

    if(token){
        const user = decodeToken(token)
        if(!user){
           return children 
        }else{
            return <Navigate to="/dashboard"/>
        }
    }else{
        return children
    }
}