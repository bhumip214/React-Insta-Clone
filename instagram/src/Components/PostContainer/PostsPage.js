import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import PostList from "./PostList";

const PostsPage = props => {
  return (
    <div className="posts-page">
      <SearchBar
        handleSearchInput={props.handleSearchInput}
        searchInputValue={props.searchInputValue}
      />
      <PostList posts={props.posts} />
    </div>
  );
};

export default PostsPage;
