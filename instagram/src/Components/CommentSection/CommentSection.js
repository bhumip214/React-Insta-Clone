import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import "./Comment.css";

function CommentSection(props) {
  return (
    <div className="comment-section">
      <div className="comment-action-icons">
        <i className="comment-heart far fa-heart" />
        <i className="far fa-comment" />
      </div>
      <strong className="comment-likes">{props.likes} likes</strong>

      <div className="comments">
        {props.comments.map(comment => {
          return <Comment comment={comment} />;
        })}
      </div>
      <hr />
      <form>
        <input
          className="comment-input"
          type="text"
          placeholder="Add comment... "
        />
        <i className="fas fa-ellipsis-h" />
      </form>
    </div>
  );
}

CommentSection.propTypes = {
  comments: PropTypes.array
};

export default CommentSection;
