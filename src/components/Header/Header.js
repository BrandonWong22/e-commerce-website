import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Crown from "../../assets/images/crown.svg";
import { auth } from "../../firebase/firebase";
import { connect } from "react-redux";
import CartIcon from "../CartIcon/CartIcon";

const Header = ({ currentUser }) => {
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
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
