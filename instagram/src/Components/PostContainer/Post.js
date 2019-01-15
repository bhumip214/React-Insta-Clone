import React from "react";
import PropTypes from "prop-types";
import "./Post.css";
import CommentSection from "../CommentSection/CommentSection";

function Post(props) {
  return (
    <div className="post">
      <div className="post-header">
        <img
          alt="post header"
          className="post-thumb"
          src={props.post.thumbnailUrl}
        />
        <h4 className="post-username">{props.post.username}</h4>
      </div>

      <div className="post-image">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>

      <CommentSection
        comments={props.post.comments}
        likes={props.post.likes}
        timestamp={props.post.timestamp}
      />
    </div>
  );
}
Post.propTypes = {
  post: PropTypes.shape({
    thumbnailUrl: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
      })
    ).isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired
  }).isRequired
};
export default Post;
