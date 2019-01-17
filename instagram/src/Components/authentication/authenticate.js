import React from "react";
import Login from "../Login/Login";

const authenticate = App => Login =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      this.setState({
        loggedIn: localStorage.getItem("username")
      });
    }

    render() {
      if (this.state.loggedIn) {
        return <App />;
      } else {
        return <Login />;
      }
    }
  };

export default authenticate;
