import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";

import PostsPage from "./Components/PostContainer/PostsPage";
import Login from "./Components/Login/Login";
import authenticate from "./Components/authentication/authenticate";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

const higherOrderComponent = authenticate(App)(Login);

export default higherOrderComponent;
