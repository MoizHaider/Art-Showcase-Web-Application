"use client"
import React from 'react'

function PostBtns() {
  return (
    <>
        <button type="button" onClick={onLikeClickHandler}>Like</button>
        <button type="button" onClick={onComment}>Comment</button>
        <button type="button">Save</button>
    </>
  )
}

export default PostBtns