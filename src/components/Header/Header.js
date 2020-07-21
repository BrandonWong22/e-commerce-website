import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Crown from "../../assets/images/crown.svg";
import { auth } from "../../firebase/firebase";
import { connect } from "react-redux";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/CartSelectors";
import { selectCurrentUser } from "../../redux/user/UserSelectors";

const Header = ({ currentUser, hidden }) => {
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
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
