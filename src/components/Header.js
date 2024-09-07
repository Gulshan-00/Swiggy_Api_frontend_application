import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserConstext from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";


const Header = () => {
  const [Login, setLogin] = useState("login");

  const onlineStatus= useOnlineStatus();

const data=useContext(UserConstext);

const cartItems= useSelector((store)=> store.cart.items);


  return (
    <div className="header flex justify-between items-center border-b-2 shadow-lg">
      <div className="logo-container">
        <img className="w-[100px]" src={LOGO_URL} alt="img" />
      </div>

      <div className="nav-item">
        <ul className="flex gap-8">
          <li>
            <h2>Online Status:{onlineStatus?"✅":"🔴"}</h2>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
            {/* <a href="/contact">Contact Us</a> */}
          </li>
          <li className="font-bold text-lg">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>

          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
        </ul>
      </div>

      <div>
        <button
          className="login-btn bg-gray-300 rounded-lg hover:bg-black hover:text-white py-2 px-4 mr-6"
          onClick={() => {
            Login == "login" ? setLogin("logout") : setLogin("login");
          }}
        >
          {Login}
        </button>
        <li className="list-none font-extrabold text-xs ml-2">{data.LogedInUser}</li>
      </div>
    </div>
  );
};

export default Header;
