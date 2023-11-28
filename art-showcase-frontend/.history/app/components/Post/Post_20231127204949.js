import React from "react";
import PostBtns from "./PostBtns";
import CommentSection from "./CommentSection";
import cookie from "cookie-cutter";
function Post(props) {
  //render list of data revieved from page.js
  const token = props.token;
  const likeQuery = {
    query: `
      mutation likePost($postId: ID!, $userData: userDataInput!){
        likePost(postId: $postId, userData: $userData)
      }
    `,
    variables: {
      postId: props.postId,
      userData: {
        _id: props.userData._id,
        name: props.userData.name,
        profilePicUrl: props.userData.profilePicUrl,
        backgroundImgUrl: props.userData.backgroundImgUrl,
      },
    },
  };
  const likeHandler = () => {
    fetch("http://localhost:8080/graphql", {
      method: "post",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(likeQuery),
    })
      .then((res) => res.json())
      .then((result) => {});
  };
  let imgUrl;
  if (props.server) {
    imgUrl = "http://localhost:8080/" + props.urls[0];
  } else {
    imgUrl = props.urls[0];
  }

  return (
    <div className="border-[2px] border-solid border-pink-500 p-7 rounded-[20px]  bg-darkB w-[80%] flex justify-center h-0">
      <div className="flex flex-col justify-center items-center bg-gray-100 p-3 rounded-[10px] py-0">
        <div>UserName</div>
        <img src={imgUrl} alt="" className="w-[400px] h-[400px]" />
        <PostBtns />
        <div className="">
          <div className="w-auto">{props.title}</div>
          <div className="w-auto">{props.description}</div>
        </div>
      </div>
    </div>
  );
}

export default Post;
