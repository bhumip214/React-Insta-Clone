import React from "react";
import "./Login.css";

const Login = props => {
  return (
    <div className="login">
      <div className="login-header">
        <div className="logo-header">
          <h1 className="login-h1">Instagram</h1>
        </div>
      </div>

      <div>
        <form className="login-form" onSubmit={props.handleSubmit}>
          <input
            className="login-input"
            type="text"
            value={props.username}
            placeholder="Username"
            onChange={props.handleUserNameChange}
          />
          <input
            className="login-input"
            type="password"
            value={props.password}
            placeholder="Password"
            onChange={props.handlePasswordChange}
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
};

export default Login;
