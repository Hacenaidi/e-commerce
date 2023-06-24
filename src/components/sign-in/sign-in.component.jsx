import React from "react";
import FromInput from "../form-input/form-input.component";
import "./sign-in.style.scss";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import CustomButtom from "../custom-buttom/custom-buttom.component";
import { signInWithEmailAndPassword } from "firebase/auth";

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
    const { email, password } = this.state;
    try {
      signInWithEmailAndPassword(auth, email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error );
    }
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
