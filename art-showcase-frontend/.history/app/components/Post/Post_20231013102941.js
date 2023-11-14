"use client"
import { useState } from 'react'
import React from 'react'
import PostBtns from './PostBtns'
import CommentSection from "./CommentSection"

function TrendingPosts(props) {
  //render list of data revieved from page.js
  return (
    <div className = "grid grid-cols-1 justifyborder-[2px] border-solid border-gray-700 p-7 rounded-[20px] w-[100%]">
      <main>
        {props.title}
        <div>
          {props.description}
        </div>
      </main>
      <PostBtns/>
    </div>
  )
}

export default TrendingPosts