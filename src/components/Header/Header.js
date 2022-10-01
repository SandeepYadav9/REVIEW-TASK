import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <span>Review</span>
      <div className="header-right">      
        <NavLink to="/login">Login</NavLink>       
      </div>    
    </div>
  );
};

export default Header;
