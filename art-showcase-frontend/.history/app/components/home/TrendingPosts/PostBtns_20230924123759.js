"use client"
import React from 'react'

function PostBtns() {
    //recieve post id as props
    //use state to change the sate
    //use useeffect to pass the state as a dependecy and then add a post request to update the 
    const onLikeClickHandler = ()=>{

    }
    const onCommentClickHandler = ()=>{

    }
    const onSaveClickHandler = ()=>{

    }
  return (
    <>
        <button type="button" onClick={onLikeClickHandler}>Like</button>
        <button type="button" onClick={onCommentClickHandler}>Comment</button>
        <button type="button" onClick={onSaveClickHandler}>Save</button>
    </>
  )
}

export default PostBtns