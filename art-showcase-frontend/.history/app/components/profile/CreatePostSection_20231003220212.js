"use client"
import React from 'react'

function CreatePostSection() {
  return (
    <>
      <form>
        <label>Upload Photo</label>
        <input type = "file" name = "postImg"/>
        <label>Title</label>
        <input type="text" name="" value="">
      </form>
    </>
  )
}

export default CreatePostSection