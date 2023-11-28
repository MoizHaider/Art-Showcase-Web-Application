"use client";
import React from "react";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import { useInView } from "react-intersection-observer";
import GetProfilePosts from "@/ServerActions/GetProfilePosts";

function LoadMorePosts(token, userId) {
  const [pagesLoaded, setPagesLoaded] = useState(1);
  const [profilePosts, setPosts] = useState();
  const { ref, inView } = useInView();
  const profilePosts = async ()=>{
    const nextPage = pagesLoaded+1;
    const newPosts = await GetProfilePosts(nextPage, token, userId) ?? [];


  }
  useEffect(() => {
    console.log("Load More")
    if (inView) {
      console.log("To the end");
    }
  }, [inView]);
  return (
    <>
      <div ref = {ref}>
        <Spinner />
      </div>
    </>
  );
}

export default LoadMorePosts;
