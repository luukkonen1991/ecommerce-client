import React, { useState } from "react";

import SignInForm from "../../components/Sign-in-form/Sign-in-form";
import RegisterForm from "../../components/Register-form/RegisterForm";

import "./SignInAndSignUp.scss";

const SignInAndSignUp = ({ match }) => {
  if (match.url === "/signin") {
    return (
      <div className="main-container">
        <SignInForm />
      </div>
    );
  } else if (match.url === "/register") {
    return (
      <div className="main-container">
        <RegisterForm />
      </div>
    );
  }
};

export default SignInAndSignUp;
