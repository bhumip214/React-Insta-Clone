import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";

import SearchBar from "./Components/SearchBar/SearchBar";
import PostList from "./Components/PostContainer/PostList";

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
        <SearchBar
          handleSearchInput={this.handleSearchInput}
          searchInputValue={this.state.searchValue}
        />
        <PostList posts={filterPosts} />
      </div>
    );
  }
}

export default App;
