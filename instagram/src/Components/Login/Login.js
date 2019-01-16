import React from "react";

const Login = props => {
  return (
    <form className="Login" onSubmit={props.handleSubmit}>
      <input
        type="text"
        value={props.username}
        placeholder="Username"
        onChange={props.handleUserNameChange}
      />
      <input
        type="password"
        value={props.password}
        placeholder="Password"
        onChange={props.handlePasswordChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
