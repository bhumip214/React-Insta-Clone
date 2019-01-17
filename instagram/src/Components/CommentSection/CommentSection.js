import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import "./Comment.css";
import moment from "moment";
import styled from "styled-components";

const CommentsWrapperDiv = styled.div`
  padding: 10px;
  font-size: 14px;
`;
const ActionIconsDiv = styled.div`
  font-size: 20px;
  margin-bottom: 5px;
`;

const CommentsSectionDiv = styled.div`
  margin: 10px 0;
`;

const CommentTimestamp = styled.div`
  font-size: 12px;
  color: grey;
  margin-bottom: 10px;
`;

const StyledHr = styled.hr`
  background-color: rgb(228, 228, 228);
  height: 1px;
  border: 0;
`;

const CommentInput = styled.input`
  width: 92%;
  margin: 8px;
  border: none;
  font-size: 14px;
`;

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
        {
          username: localStorage.getItem("username"),
          text: this.state.newComment
        }
      ],
      newComment: ""
    });
  };

  render() {
    return (
      <CommentsWrapperDiv>
        <ActionIconsDiv>
          <i
            onClick={this.handleLike}
            className={
              this.state.userLiked
                ? "heart-icon fas fa-heart"
                : "heart-icon far fa-heart"
            }
            style={{ color: this.state.userLiked ? "red" : "" }}
          />
          <i className="far fa-comment" />
        </ActionIconsDiv>
        <strong>{this.state.likes} likes</strong>

        <CommentsSectionDiv>
          {this.state.comments.map(comment => {
            return <Comment comment={comment} />;
          })}
        </CommentsSectionDiv>

        <CommentTimestamp title={this.props.timestamp}>
          {moment(this.props.timestamp, "MMMM Do YYYY, h:mm:ss a").fromNow()}
        </CommentTimestamp>

        <StyledHr />
        <form onSubmit={this.addNewComment}>
          <CommentInput
            onChange={this.handleNewComment}
            type="text"
            name="comment"
            value={this.state.newComment}
            placeholder="Add comment... "
            autoComplete="off"
          />
          <i className="fas fa-ellipsis-h" />
        </form>
      </CommentsWrapperDiv>
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
