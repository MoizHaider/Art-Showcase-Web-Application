import React from "react";
import { useState } from "react";

function ProfilePostBtns(props) {

  const createPostHandler = () => {
    setRenderAddPostSec(true);
  };
  const createSectionCloseHandler = () => {
    setRenderAddPostSec(false);
  };
  return (
    <div>
      <button type="button">Posts</button>
      <button type="button">Saved</button>
      <button
        type="button"
        onClick={createPostHandler}
        addPostHandler={props.addPostClickHandler}
        closeHandler={createSectionCloseHandler}
      >
        Create Post
      </button>
    </div>
  );
}

export default ProfilePostBtns;
