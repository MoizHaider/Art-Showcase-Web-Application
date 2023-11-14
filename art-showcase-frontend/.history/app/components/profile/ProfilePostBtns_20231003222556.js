import React from 'react'
import {useState} from "react"

function ProfilePostBtns(props) {
  const [renderAddPostSec, setRenderAddPostSec] = useState(false);
  const createPostHandler = ()=>{
    setRenderAddPostSec(true);
  }
  return (
    <div>
        <button type='button'>Posts</button>
        <button type = "button">Saved</button>
        <button type = "button" onClick={createPostHandler} addPostHandler = {props.}>Create Post</button>
    </div>
  )
}

export default ProfilePostBtns