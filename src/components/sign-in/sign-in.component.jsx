import React from "react";

import "./sign-in.style.scss";

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
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            required
          />
          <label htmlFor="Email">Email</label>
          <input
            onChange={this.handleChange}
            type="password"
            name="password"
            value={this.state.password}
            required
          />
          <label htmlFor="password">Password</label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default SingIn;
