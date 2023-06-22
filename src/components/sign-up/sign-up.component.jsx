import React, { Component } from "react";

import "./sign-up.style.scss";
import FromInput from "../form-input/form-input.component";
import CustomButtom from "../custom-buttom/custom-buttom.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { createUserWithEmailAndPassword } from "firebase/auth";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password != confirmPassword) {
      alert("password don't match");
      return;
    }
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };
  handlechange = async (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h1 className="title">I do not have a account </h1>
        <span>Sign up with your email and passwor0d</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FromInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handlechange}
            label="Dispaly Name"
            required
          />
          <FromInput
            type="email"
            name="email"
            value={email}
            onChange={this.handlechange}
            label="Email"
            required
          />
          <FromInput
            type="password"
            name="password"
            value={password}
            onChange={this.handlechange}
            label="Password"
            required
          />
          <FromInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handlechange}
            label="Password"
            required
          />
          <CustomButtom type="submit">Sign Up</CustomButtom>
        </form>
      </div>
    );
  }
}
export default SignUp;
