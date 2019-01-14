import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import dummyData from "./dummy-data";

import SearchBar from "./Components/SearchBar/SearchBar";
import PostList from "./Components/PostContainer/PostList";

console.log(dummyData);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instaPosts: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostList posts={this.state.instaPosts} />
      </div>
    );
  }
}

export default App;
