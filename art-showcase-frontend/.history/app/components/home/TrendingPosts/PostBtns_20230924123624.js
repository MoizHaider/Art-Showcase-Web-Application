"use client"
import React from 'react'

function PostBtns() {
    //recieve post id as props
    const onLikeClickHandler = ()=>{

    }
    const onCommentClickHandler = ()=>{

    }
    const onSa
  return (
    <>
        <button type="button" onClick={onLikeClickHandler}>Like</button>
        <button type="button" onClick={onCommentClickHandler}>Comment</button>
        <button type="button" onClick={onSaveClickHandler}>Save</button>
    </>
  )
}

export default PostBtns