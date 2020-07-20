import React from "react";
import "./SignInSignOut.scss";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

const SignInSignOut = () => {
  return (
    <div className="sign-in-sign-out">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignOut;
