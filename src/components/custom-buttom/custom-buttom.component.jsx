import React from "react";
import "./custom-buttom.style.scss";

const CustomButtom = ({ children, isGoogleSignIn, ...otherPrpos }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...otherPrpos}
  >
    {children}
  </button>
);
export default CustomButtom;
