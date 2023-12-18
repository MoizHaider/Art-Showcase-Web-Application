"use client";
import React, { use, useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import heart from "../../../public/heart.svg";
import LikePost from "@/ServerActions/LikePost";
import getComments from "@/ServerActions/getComments";

function PostBtns(props) {
  //recieve post id as props
  //use state to change the sate
  //use useeffect to pass the state as a dependecy and then add a post request to update the data in db
  const [isLiked, setIsLiked] = useState(props.liked); //do check when a post is rendered wheater the user liked it previously or not
  const [likesCount, setLikesCount] = useState(props.likesCount);

  
  const onLikeClickHandler = () => {
    if (!isLiked) {
      setLikesCount((prevCount) => prevCount + 1);
    } else {
      setLikesCount((prevCount) => prevCount - 1);
    }
    LikePost(props.token, props.postId, props.userId, isLiked);
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };
  const onCommentClickHandler =  async () => {
    const renderComments = !props.renderCommentSec;
    props.setRenderCommentSec(preVal => !preVal);
    if(renderComments){
      const comments = await getComments(props.token, props.postId, props.userId, 1);
      //console.log("New fetch comments ", comments)
      props.setCommentsData(prevComments => [...prevComments, ...comments]);
    }
      else{
        props.setCommentsData([])
        props.setCommentPageLoaded(1);
      }
    
  };
  const heartFill = isLiked ? "fill-red-500" : "stroke-black stroke-[1px] fill-white"; 
  const onSaveClickHandler = () => {};
  return (
    <div className="flex justify-between w-[100%] mt-[2em]">
      <div className="flex gap-x-3">
      <button type="button" onClick={onLikeClickHandler} className="border-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="40"
        height="50"
        className= {heartFill}
      >
        {/* Your SVG path or other elements */}
        {/* Example: */}
        <path d="M12 21.35l-1.45-1.32C5.4 14.25 2 11.35 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 2.85-3.4 5.75-8.55 11.54L12 21.35z" />
      </svg>
      <div>{likesCount} likes</div>
    </button>
        <button type="button" onClick={onCommentClickHandler}>
          Comment
        </button>
      </div>
      <button type="button" onClick={onSaveClickHandler}>
        Save
      </button>
    </div>
  );
}

export default PostBtns;
