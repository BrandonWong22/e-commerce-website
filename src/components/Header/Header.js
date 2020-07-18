import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Crown from "../../assets/images/crown.svg";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <img className="logo" src={Crown} alt="crown" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
