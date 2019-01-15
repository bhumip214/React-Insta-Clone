import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import "./Comment.css";
import moment from "moment";

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

      <div className="comment-timestamp" title={props.timestamp}>
        {moment(props.timestamp, "MMMM Do YYYY, h:mm:ss a").fromNow()}
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
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired
    })
  ).isRequired,
  likes: PropTypes.number.isRequired,
  timestamp: PropTypes.string.isRequired
};

export default CommentSection;
