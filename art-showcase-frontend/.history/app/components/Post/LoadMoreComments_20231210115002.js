"use client";
import React from "react";
import { useState, useEffect } from "react";
import Spinner from "../Spinner";
import { useInView } from "react-intersection-observer";
import Comment from "./Comment";

import React from 'react'

export default function LoadMoreComments() {
    const [commentPageLoaded, setCommentPageLoaded] = useState(1)
    
  return (
    <div>LoadMoreComments</div>
  )
}
