import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostsPage from "./Components/PostContainer/PostsPage";
import authenticate from "./Components/authentication/authenticate";
import Login from "./Components/Login/Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instaPosts: [],
      searchInputValue: "",
      username: "",
      password: "",
      loggedIn: false
    };
  }

  componentDidMount() {
    this.setState({ instaPosts: dummyData });
  }

  handleSearchInput = event => {
    console.log(event.target.value);
    this.setState({ searchInputValue: event.target.value });
  };

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
    const filterPosts = this.state.instaPosts.filter(post => {
      return post.username
        .toLowerCase()
        .includes(this.state.searchInputValue.toLowerCase());
    });

    const username = localStorage.getItem("username");

    return (
      <div className="App">
        <PostsPage
          handleSearchInput={this.handleSearchInput}
          searchInputValue={this.state.searchInputValue}
          posts={filterPosts}
        />
        <Login
          username={this.state.username}
          password={this.state.password}
          handleSubmit={this.handleSubmit}
          handleUserNameChange={this.handleUserNameChange}
          handlePasswordChange={this.handlePasswordChange}
        />
      </div>
    );
  }
}

const higherOrderComponent = authenticate(App);

export default App;
