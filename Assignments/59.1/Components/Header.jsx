import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ ProductCount }) => {
  return (
    <div className="shadow-md py-6 ">
      <div className="w-[80vw] mx-auto flex justify-between gap-2 ">
        <img
          className="w-28"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1206px-Amazon_logo.svg.png?20220213013322"
          alt="LOGO"
        />
        <div className="flex gap-2 sm:gap-4">
          <div className="hidden sm:flex gap-3 ">
            <NavLink to="/">Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Contact</NavLink>
          </div>
          <GiHamburgerMenu className="sm:hidden text-2xl" />
          <div className="flex gap-1"><NavLink to="/cart">
            <FaShoppingCart className="text-2xl" />
          </NavLink>
          <p className="bg-red-500 h-4 w-4 flex justify-center items-center rounded-full p-3">{ProductCount}</p></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
