"use client";
import { useState, useEffect } from "react";
import Spinner from "../Spinner";
import { useInView } from "react-intersection-observer";
import Comment from "./Comment";
import React from "react";
import getComments from "@/ServerActions/getComments";

export default function LoadMoreComments(props) {


  const { ref, inView } = useInView();

  const commentsFun = async () => {
    const nextPage = props.commentPageLoaded + 1;
    if (props.renderCommentSec) {
      const newCommentsData = await getComments(
        props.tokken,
        props.postId,
        props.userId,
        nextPage
      );
      props.setCommentPageLoaded((prevPage) => prevPage + 1);
      props.setComments((prevComments) => [...prevComments, ...newCommentsData]);
    }
  };
  useEffect(() => {
    if (inView) {
      commentsFun();
    }
  }, [inView]);

  return (
    <>
      {props.comments.length > 0
        ? comments.map((comment) => <Comment commentData={comment}></Comment>)
        : null}
      <div ref={ref}>
        <Spinner />
      </div>
    </>
  );
}
