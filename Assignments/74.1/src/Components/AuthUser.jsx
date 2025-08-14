import { Navigate } from "react-router-dom";
import {UserContext} from "../App"
import { useContext } from "react";
const AuthUser = ({children }) => {
  const { user } = useContext(UserContext);

  if (user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default AuthUser;
