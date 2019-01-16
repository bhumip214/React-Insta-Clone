import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostsPage from "./Components/PostContainer/PostsPage";
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
    let filterPosts = this.state.instaPosts.filter(post => {
      return post.username
        .toLowerCase()
        .includes(this.state.searchInputValue.toLowerCase());
    });

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

const newComponent = authenticate(App);

export default App;
