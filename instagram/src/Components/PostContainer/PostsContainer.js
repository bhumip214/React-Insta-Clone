import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";
import styled from "styled-components";

const PostsContainerDiv = styled.div`
  width: 500px;
  margin: 0 auto;
`;

function PostsContainer(props) {
  return (
    <PostsContainerDiv>
      {props.posts.map(post => {
        return <Post post={post} />;
      })}
    </PostsContainerDiv>
  );
}

PostsContainer.propTypes = {
  posts: PropTypes.array
};

export default PostsContainer;
