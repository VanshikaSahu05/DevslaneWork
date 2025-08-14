import { Navigate } from 'react-router-dom'
import {UserContext} from "../App"
import { useContext } from "react"
const LoginUser = ({children}) => {
      const {user} = useContext(UserContext)
    
    if(!user){
        return <Navigate to="/LoginPage" />
    }
  return children 
  
}

export default LoginUser