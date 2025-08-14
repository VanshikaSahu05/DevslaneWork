import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import {UserContext} from "../App"
import "../App.css";
import { useContext } from "react";
const Header = ({ ProductCount }) => {

  const {user,setUser} = useContext(UserContext)

  function handleLogOut(){
    localStorage.removeItem("token")
    setUser(undefined)
  }
  return (
    <div className="shadow-md py-6 flex px-2">
      <div className="w-[80vw] mx-auto flex justify-between gap-2 ">
        <img
          className="w-28 "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1206px-Amazon_logo.svg.png?20220213013322"
          alt="LOGO"
        />
        <div className="flex gap-2 sm:gap-4">
          <div className="hidden sm:flex gap-3 ">
            <NavLink className="font-medium" to="/">
              Home
            </NavLink>
            <NavLink className="font-medium">About</NavLink>
            <NavLink className="font-medium">Contact</NavLink>
          </div>
          <GiHamburgerMenu className="sm:hidden text-2xl" />
          <div className="flex gap-1">
            <NavLink to="/cart">
              <FaShoppingCart className="text-2xl" />
            </NavLink>
            <p className="bg-red-500 h-2 w-2 flex justify-center items-center rounded-full p-3">
              {ProductCount}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row text-xs font-medium sm:text-base sm:gap-2 gap-1 justify-center ">
        {!user ? (
    <NavLink to="/login">Login</NavLink>
  ) : (
    <button onClick={handleLogOut}>Logout</button>
  )}
      </div>
    </div>
  );
};

export default Header;
