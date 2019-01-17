import React from "react";
import Login from "../Login/Login";

const authenticate = App => Login =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: "",
        loggedIn: false
      };
    }

    componentDidMount() {
      this.setState({
        loggedIn: localStorage.getItem("username")
      });
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
      if (this.state.loggedIn) {
        return <App />;
      } else {
        return (
          <Login
            username={this.state.username}
            password={this.state.password}
            handleSubmit={this.handleSubmit}
            handleUserNameChange={this.handleUserNameChange}
            handlePasswordChange={this.handlePasswordChange}
          />
        );
      }
    }
  };

export default authenticate;
