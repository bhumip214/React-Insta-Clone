import React from "react";
import dummyData from "../../dummy-data";
import SearchBar from "../SearchBar/SearchBar";
import PostsContainer from "./PostsContainer";

class PostsPage extends React.Component {
  constructor() {
    super();
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
      <div>
        <SearchBar
          handleSearchInput={this.state.handleSearchInput}
          searchInputValue={this.state.searchInputValue}
        />
        <PostsContainer posts={filterPosts} />
      </div>
    );
  }
}

export default PostsPage;
