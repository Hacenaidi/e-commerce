import React from "react";
import FromInput from "../form-input/form-input.component";
import "./sign-in.style.scss";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import CustomButtom from "../custom-buttom/custom-buttom.component";

class SingIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FromInput
            type="email"
            name="email"
            handlechange={this.handleChange}
            value={this.state.email}
            required
            label="Email"
          />
          <FromInput
            handlechange={this.handleChange}
            type="password"
            name="password"
            value={this.state.password}
            required
            label="Password"
          />
          <div className="buttons">
            <CustomButtom type="submit"> Sign in</CustomButtom>
            <CustomButtom onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with google
            </CustomButtom>
          </div>
        </form>
      </div>
    );
  }
}
export default SingIn;
