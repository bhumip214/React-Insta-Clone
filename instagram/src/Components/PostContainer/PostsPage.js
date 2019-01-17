import React from "react";
import dummyData from "../../dummy-data";
import SearchBar from "../SearchBar/SearchBar";
import PostList from "./PostList";

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
      <div className="posts-page">
        <SearchBar
          handleSearchInput={this.state.handleSearchInput}
          searchInputValue={this.state.searchInputValue}
        />
        <PostList posts={filterPosts} />
      </div>
    );
  }
}

export default PostsPage;
