import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import dummyData from "./dummy-data";

import SearchBar from "./Components/SearchBar/SearchBar";

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
      </div>
    );
  }
}

export default App;
