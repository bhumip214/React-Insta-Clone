import React from "react";
import PropTypes from "prop-types";
import "./Post.css";
import CommentSection from "../CommentSection/CommentSection";
import styled from "styled-components";

const PostWrapperDiv = styled.div`
  border: 1px solid #d3d3d3;
  margin: 40px 0;
`;

const PostHeader = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
`;

const UserThumbnail = styled.img`
  border-radius: 50%;
  width: 36px;
  height: 36px;
  text-align: center;
`;

const Username = styled.h4`
  margin: 0;
  margin-left: 10px;
  font-size: 16px;
`;

const PostImage = styled.img`
  width: 100%;
`;

function Post(props) {
  return (
    <PostWrapperDiv>
      <PostHeader>
        <UserThumbnail alt="post header" src={props.post.thumbnailUrl} />
        <Username>{props.post.username}</Username>
      </PostHeader>

      <div className="post-image">
        <PostImage alt="post thumbnail" src={props.post.imageUrl} />
      </div>

      <CommentSection
        comments={props.post.comments}
        likes={props.post.likes}
        timestamp={props.post.timestamp}
      />
    </PostWrapperDiv>
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
