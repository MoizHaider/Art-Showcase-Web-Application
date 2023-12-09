"use client";
import React from "react";
import Comments from "./Comments";
import { useSelector } from "react-redux";
function CommentSection() {
  const renderCommentsSec = useSelector(
    (state) => state.postReducer.renderCommentSec
  );
  console.log(renderCommentsSec);
  return (
    <>
      <div>
        <input type="text" placeholder="Add a Comment" />
        <button type="button" onClick={onAddHandler}>
          Add
        </button>
      </div>
      {renderCommentsSec ?? (
        <div>
          <Comments />
        </div>
      )}
    </>
  );
}

export default CommentSection;
