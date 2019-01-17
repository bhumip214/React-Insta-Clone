import React from "react";
import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loggedIn: false
    };
  }

  handleUserNameChange = event => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    localStorage.setItem("username", this.state.username);
    this.setState({ loggedIn: true, username: "" });
  };

  render() {
    const username = localStorage.getItem("username");
    return (
      <div className="login">
        <div className="login-header">
          <div className="logo-header">
            <h1 className="login-h1">Instagram</h1>
          </div>
        </div>

        <div>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <input
              className="login-input"
              type="text"
              value={this.username}
              placeholder="Username"
              onChange={this.handleUserNameChange}
            />
            <input
              className="login-input"
              type="password"
              value={this.password}
              placeholder="Password"
              onChange={this.handlePasswordChange}
            />
            <button className="login-btn" type="submit">
              Log in
            </button>
          </form>
        </div>
        <div>
          <p>
            Don't have an account?
            <span>
              <a href="#">Sign up</a>
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
