import React from "react";
import Comment from "./Comment";
import LoadMoreComments from "./LoadMoreComments";

export default function Comments(props) {
  return (
    <>
      {props.commentsData > 0
        ? 
        props.commentsData.map((comment) => <Comment commentData={comment} />)
        
        : <h1>No Comments</h1>}
      {props.commentsData > 0
        ? )
        <LoadMoreComments
        renderCommentSec={props.renderCommentSec}
        postId={props.postId}
        userId={props.userId}
        token={props.token}
        setCommentsData={props.setCommentsData}
        setCommentPageLoaded={props.setCommentPageLoaded}
        commentPageLoaded={props.commentPageLoaded}
        commentsData = {props.commentsData}
      />
        
        : null}

    </>
  );
}
