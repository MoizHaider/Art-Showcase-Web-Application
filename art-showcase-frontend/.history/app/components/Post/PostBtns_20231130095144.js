"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import heart from "../../../public/heart.svg";
import LikePost from "@/ServerActions/LikePost";
function PostBtns(props) {
  //recieve post id as props
  //use state to change the sate
  //use useeffect to pass the state as a dependecy and then add a post request to update the data in db
  const [liked, setLiked] = useState(props.liked); //do check when a post is rendered wheater the user liked it previously or not
  const [likesCount, setLikesCount] = useState(props.likesCount);
  const [commnetsData, setCommentsData] = useState([]);
  const [commentsCount, setCommentsCount] = useState(props.commentsCount);
  const [toggleComments, setToggleComments] = useState("false");
  let likedClass = liked === true ? "bg-red-400" : "";
  console.log(liked)

  const onLikeClickHandler = () => {
    if(!liked){
      setLikesCount((prevCount) => prevCount + 1);
    }
    else{
      setLikesCount((prevCount) => prevCount - 1);
    }
    LikePost(null, null, liked);
    setLiked((previousLiked) => !previousLiked);    
  };
  const onCommentClickHandler = () => {};
  const onSaveClickHandler = () => {};
  return (
    <div className="flex justify-between w-[100%] mt-[2em]">
      <div className="flex gap-x-3">
        <button
          type="button"
          onClick={onLikeClickHandler}
          className="border-none"
        >
          <Image
            src={heart}
            width={50}
            height={50}
            className={`red-500 stroke-black stroke-2 ${likedClass}`}
          />
          <div>{likesCount} likes</div>
        </button>
        <button type="button" onClick={onCommentClickHandler}>
          Comment
        </button>
      </div>
      <button type="button" onClick={onSaveClickHandler}>
        Save
      </button>
      {props.children}
    </div>
  );
}

export default PostBtns;
