import { useState } from "react";
import { LOGO_URL } from "./utils/constant";
import { Link } from "react-router";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/userContaxt";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const {loginUser}=useContext(UserContext)
  console.log(loginUser)

  const cartItems=useSelector((store)=>{return store.cart.items})
  console.log(cartItems)
  
  let [headbtn, setheadbtn] = useState("Login");
  const onlineStatus=useOnlineStatus();
  return (
    <div className="flex justify-between mb-2 border border-black">
      <div>
        <img alt="appLogo" className="w-24 " src={LOGO_URL}></img>
      </div>
      <ul className="flex justify-center items-center">
        <li className="hover:cursor-pointer">online Status:{onlineStatus?"✅":"🔴"}</li>

        <li className="px-2 mx-2">
          <Link to="/">Home</Link>
        </li>
        <li className="px-2 mx-2">
          <Link to="/about">About Us</Link>
        </li>
        <li className="px-2 mx-2">
          <Link to="/contact">Contact us</Link>
        </li>
        <li className="px-2 mx-2 text-xl font-semibold "><Link to='/cart'>Cart-({cartItems.length})</Link></li>
       <li className="px-2 mx-2"> <button
          className="log-btn"
          onClick={() => {
            setheadbtn(headbtn == "Login" ? "Logout" : "Login");
          }}
        >
          {headbtn}:
        </button>
        
        </li>
        <li className="pr-1" >{loginUser}</li>
      </ul>
    </div>
  );
};

export default Header;
