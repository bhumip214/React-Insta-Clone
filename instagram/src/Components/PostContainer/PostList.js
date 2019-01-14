import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";

function PostList(props) {
  return (
    <div className="postList">
      {props.posts.map(post => {
        return <Post post={post} />;
      })}
    </div>
  );
}

PostList.propTypes = {
  instaPosts: PropTypes.array
};

export default PostList;
