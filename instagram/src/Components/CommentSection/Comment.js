import React from "react";
import PropTypes from "prop-types";

const Comment = props => {
  return (
    <div className="comment">
      <strong className="comment-username">{props.comment.username}</strong>
      <span className="comment-text">{props.comment.text}</span>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;
