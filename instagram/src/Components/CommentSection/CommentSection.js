import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import "./Comment.css";
import moment from "moment";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      newComment: "",
      likes: props.likes,
      userLiked: false
    };
  }

  handleLike = () => {
    if (this.state.userLiked) {
      this.setState({ likes: this.state.likes - 1, userLiked: false });
    } else {
      this.setState({ likes: this.state.likes + 1, userLiked: true });
    }
  };

  handleNewComment = event => {
    event.preventDefault();
    this.setState({
      newComment: event.target.value
    });
  };

  addNewComment = event => {
    event.preventDefault();
    this.setState({
      comments: [
        ...this.state.comments,
        { username: "User", text: this.state.newComment }
      ],
      newComment: ""
    });
  };

  render() {
    return (
      <div className="comment-section">
        <div className="comment-action-icons">
          <i
            onClick={this.handleLike}
            className={
              this.state.userLiked
                ? "comment-heart fas fa-heart"
                : "comment-heart far fa-heart"
            }
            style={{ color: this.state.userLiked ? "red" : "" }}
          />
          <i className="far fa-comment" />
        </div>
        <strong className="comment-likes">{this.state.likes} likes</strong>

        <div className="comments">
          {this.state.comments.map(comment => {
            return <Comment comment={comment} />;
          })}
        </div>

        <div className="comment-timestamp" title={this.props.timestamp}>
          {moment(this.props.timestamp, "MMMM Do YYYY, h:mm:ss a").fromNow()}
        </div>

        <hr className="hr" />
        <form onSubmit={this.addNewComment}>
          <input
            onChange={this.handleNewComment}
            className="comment-input"
            type="text"
            name="comment"
            value={this.state.newComment}
            placeholder="Add comment... "
          />
          <i className="fas fa-ellipsis-h" />
        </form>
      </div>
    );
  }
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
