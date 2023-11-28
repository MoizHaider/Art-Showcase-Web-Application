import React from "react";
import PostBtns from "./PostBtns";
import CommentSection from "./CommentSection";
import cookie from "cookie-cutter";
import Image from "next/image";
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
    <div className="rounded-[20px] w-[60em] py-[1em] flex justify-center mb-[5em] justify-self-center ">
      <div className="flex flex-col justify-center items-center bg-gray-100 px-[1em] py-[1.5em] rounded-[15px] shadow-[2px_3px_15px_rgb(0,0,0,0.3)] ">
        <div>UserName</div>
        <Image
          src={imgUrl}
          alt=""
          width={600}
          height={50}
          className="rounded-[10px]"
        />

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
