import React from 'react'

function CreatePostSection() {
  return (
    <>
      <form>
        butto
        <label>Upload Photo</label>
        <input type = "file" name = "image"/>
        <label>Title</label>
        <input type="text" name="title"/>
        <label>Description</label>
        <input type="text" name="description"/>
      </form>
    </>
  )
}

export default CreatePostSection