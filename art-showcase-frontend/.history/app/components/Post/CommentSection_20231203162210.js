"use client";
import React from "react";
import Comments from "./Comments";
import { useState } from "react";

function CommentSection(props) {
  const [newComments, setNewComments] = useState([]);
  console.log(props.renderCommentSec);

  const addClickHandler = () => {};

  return (
    <>
      <form onSubmit={}>
        <input type="text" placeholder="Add a Comment" />
        <button type="button" onClick={addClickHandler}>
          Add
        </button>
      </form>

      {props.renderCommentSec ? (
        <div>
          <Comments />
        </div>
      ) : null}
    </>
  );
}

export default CommentSection;
