"use client";
import React, { useState } from "react";
import Post from "../Post/Post"

function CreatePostSection(props) {
  const [renderAddPostSec, setRenderAddPostSec] = useState(false);
  const [postsData, setPostsData] = useState([]);
  console.log(postsData)

  const addPostHandler = async (event) => {
    console.log("Hello")
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const imgUrl = URL.createObjectURL(event.currentTarget.postImages.files[0]);


    try {
      const response = await fetch("http://localhost:8080/add-post", {
        method: "post",
        headers: {
          Authorization: "Bearer " + props.token,
          userId: props.userId,
          email: props.email,
        },
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Http error! status: ${response.status}");
      }
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  const createPostHandler = () => {
    setRenderAddPostSec(true);
  };

  return (
    <>
    {console.log("sup")}
      {renderAddPostSec ? (
        <form onSubmit={addPostHandler}>
          <button type="button" onClick={() => setRenderAddPostSec(false)}>
            Close
          </button>
          <label>Upload Photo</label>
          <input type="file" name="postImages" multiple />
          <label>Title</label>
          <input type="text" name="title" />
          <label>Description</label>
          <input type="text" name="description" />
          <button type="submit">Add</button>
        </form>
      ) : null}

      <button type="button" onClick={createPostHandler}>
        Create Post
      </button>
      <div className="w-[90%] grid grid-cols-1 gap-y-5 justify-center auto-col-auto">
        {postsData.length > 0
          ? postsData.map((post) => (
              <Post
                type="userPosts"
                userData={props.data.userData}
                postId={post._id}
                title={post.title}
                description={post.description}
                likesCount={post.likesCount}
                creationDate={post.creationDate}
                commentsCount={post.commentsCount}
                urls={post.urls}
                key={post._id}
                token = {props.token}
              />
            ))
          : null}
      </div>
    </>
  );
}
export default CreatePostSection;