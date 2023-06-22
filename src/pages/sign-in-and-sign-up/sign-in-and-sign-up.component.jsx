import React from "react";

import "./sign-in-and-sign-up.scss";
import SingIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign_up">
    <SingIn />
    <SignUp /> 
  </div>
);
export default SignInAndSignUpPage;
