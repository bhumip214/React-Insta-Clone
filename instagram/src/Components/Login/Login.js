import React from "react";
import "./Login.css";
import styled from "styled-components";

const LoginWrapperDiv = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 60px;
`;

const HeaderH1 = styled.h1`
  font-size: 60px;
  font-family: "Cookie", cursive;
  font-weight: 350;
  margin: 10px;
  margin-left: 15px;
  text-align: center;
`;

const Form = styled.form`
  margin: 0 auto;
  display: flex;
  padding: 10px;
  flex-direction: column;
`;

const Input = styled.input`
  font-size: 20px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
`;

const Button = styled.button`
  font-size: 20px;
  padding: 10px;
  width: 25%;
  border-radius: 5px;
  background-color: rgb(0, 162, 255);
  color: white;

  &&:hover {
    background-color: rgb(0, 137, 228);
    color: white;
  }
`;

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
    return (
      <LoginWrapperDiv>
        <div>
          <HeaderH1>Instagram</HeaderH1>
        </div>

        <div>
          <Form className="login-form" onSubmit={this.handleSubmit}>
            <Input
              type="text"
              value={this.username}
              placeholder="Username"
              onChange={this.handleUserNameChange}
            />
            <Input
              type="password"
              value={this.password}
              placeholder="Password"
              onChange={this.handlePasswordChange}
            />
            <Button type="submit">Log in</Button>
          </Form>
        </div>
        <div>
          <p>
            Don't have an account?
            <span>
              <a href="#">Sign up</a>
            </span>
          </p>
        </div>
      </LoginWrapperDiv>
    );
  }
}

export default Login;
