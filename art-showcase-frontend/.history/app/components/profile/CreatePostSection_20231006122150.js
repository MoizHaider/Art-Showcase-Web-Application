import React from 'react'

function CreatePostSection(props) {
  const addPostHand
  return (
    <>
      <form>
        <button type="button" onClick = {()=>props.setRenderAddPostSec(false)}>Close</button>
        <label>Upload Photo</label>
        <input type = "file" name = "image"/>
        <label>Title</label>
        <input type="text" name="title"/>
        <label>Description</label>
        <input type="text" name="description"/>
        <button type="button" onClick={addPostHandler}>Add</button>
      </form>
    </>
  )
  }

export default CreatePostSection