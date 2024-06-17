import { useState } from "react";
import {LOGO_URL} from "../utils/constants";

const Header = () => {

  const [Login, setLogin]=useState("login")

    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="img" />
        </div>
  
        <div className="nav-items">
          <a href="#">Home</a>
          <a href="#">Section</a>
          <a href="#">About</a>
          <a href="#">Contact Us</a>
        </div>
               
        <div>
          <button className="login-btn" onClick={()=>{
            Login == "login"? setLogin("logout"): setLogin("login");
            
          }}>{Login}</button>
        </div>
        
      </div>
    );
  };

  export default Header;