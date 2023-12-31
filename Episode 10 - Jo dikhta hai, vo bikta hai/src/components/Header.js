import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext)
  console.log(loggedInUser);

  return (
    <div className="flex justify-between text-center px-20 bg-pink-100 sm:bg-yellow-200 text-swiggyOrange text-xl shadow-lg h-20">
      <div className="logo-container flex justify-center text-center py-2">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex justify-center items-center">
        <ul className="flex justify-center">
          <li className="px-3">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="flex px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="flex justify-center px-4">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="flex justify-center px-4">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="flex justify-center px-4">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="flex justify-center px-4">
            <Link to={"/cart"}>Cart</Link>
          </li>
          <button
            className="px-3 w-24"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="flex justify-center px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
