import React from "react";
import PropTypes from "prop-types";
import "./Post.css";

function Post(props) {
  return (
    <div className="post">
      <div className="post-header">
        <img
          alt="post header"
          className="post-thumb"
          src={props.post.thumbnailUrl}
        />
        <h4>{props.post.username}</h4>
      </div>

      <div className="post-image">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
    </div>
  );
}

export default Post;
