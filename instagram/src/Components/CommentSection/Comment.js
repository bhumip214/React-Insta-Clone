import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CommentWrapperDiv = styled.div`
  font-size: 14px;
`;

const Username = styled.strong`
  margin-right: 5px;
`;

const Comment = props => {
  return (
    <CommentWrapperDiv>
      <Username>{props.comment.username}</Username>
      <span>{props.comment.text}</span>
    </CommentWrapperDiv>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  }).isRequired
};

export default Comment;
