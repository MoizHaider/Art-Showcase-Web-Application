"use client";
import React from "react";
import { useState, useEffect } from "react";
import Spinner from "../Spinner";
import { useInView } from "react-intersection-observer";
import Comment from "./Comment";

import React from 'react'

export default function LoadMoreComments() {
    const [commentPageLoaded, setCommentPageLoaded] = useState(1)
    const [comments, setComments] = useState([]);

    const { ref, inView } = useInView();

    const commetnsFun = async ()=>{
        const nextPage = commentPageLoaded+1;
        const newCommentsData = 
    }

  return (
    <div>LoadMoreComments</div>
  )
}
