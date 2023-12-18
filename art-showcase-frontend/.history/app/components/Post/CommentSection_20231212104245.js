"use client";
import React from "react";
import Comment from "./Comment";
import { useState } from "react";
import cookie from "cookie-cutter"
import AddComment from "@/ServerActions/AddComment"

function CommentSection(props) {
  const [newComments, setNewComments] = useState([]);//Front-end Comments Data 
  const name = cookie.get("name")
  const _id = cookie.get("userId")
  const profilePicUrl = cookie.get("profilePicUrl")

  const addClickHandler = (event) => {
    event.preventDefault();
    const commentsData = {
      text: event.currentTarget.comment.value,
      userData: {
        _id,
        name,
        profilePicUrl
      },
    };
    setNewComments(prevComments=> [commentsData, ...prevComments])
    AddComment(props.token, props.postId, _id, event.currentTarget.comment.value)
  };

  return (
    <>
      <form onSubmit={addClickHandler}>
        <input type="text" placeholder="Add a Comment" name="comment" />
        <button type="submit">
          Add
        </button>
      </form>

      {newComments.length>0 === true? newComments.map(commentData=>{
        return <Comment commentData={comment}/>
      }):null}


    </>
  );
}

export default CommentSection;
