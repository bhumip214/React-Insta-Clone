import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";

import PostsPage from "./Components/PostContainer/PostsPage";
import Login from "./Components/Login/Login";
import authenticate from "./Components/authentication/authenticate";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instaPosts: [],
      searchInputValue: ""
    };
  }

  componentDidMount() {
    this.setState({ instaPosts: dummyData });
  }

  handleSearchInput = event => {
    console.log(event.target.value);
    this.setState({ searchInputValue: event.target.value });
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
      </div>
    );
  }
}

const higherOrderComponent = authenticate(App)(Login);

export default higherOrderComponent;
