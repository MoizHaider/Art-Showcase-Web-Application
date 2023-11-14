"use client";
import React from "react";
import Post from "../components/Post/Post";
import LoadMorePosts from "../components/Post/LoadMorePosts";
import EditProfileBtn from "../components/profile/EditProfileBtn";
import ProfilePostBtns from "../components/profile/ProfilePostBtns";
import { useState, useEffect } from "react";
import CreatePostSection from "../components/profile/CreatePostSection";

function page() {
  const [data, setData] = useState(null);
  const [renderAddPostSec, setRenderAddPostSec] = useState(false);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const email = localStorage.getItem("email");
  const graphqlQuery = {
    query: `
    query getProfileLoadData($userId: ID!){
      profileLoadQuery(userId: $userId){
        userData{
          _id
          name
          title
          email
          profilePicUrl
          backgroundImgUrl
          about
          badges
          events
          followersCount
          followingCount
        }
        posts{
          _id
          urls
          creationDate
          likesCount
          commentsCount
          saveCount
          title
          description
        }
      }
    }`,
    variables: {
      userId: userId,
    },
  };
  useEffect(() => {
    const response = fetch("http://localhost:8080/graphql", {
      method: "post",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(graphqlQuery),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          if (data.data.profileLoadQuery.posts.length > 0) {
            data.data.profileLoadQuery.posts.map((post) => {
              return (
                <Post
                  type="userPosts"
                  _id={post._id}
                  title={post.title}
                  description={post.description}
                  likesCount={post.likesCount}
                  creationDate={post.creationDate}
                  commentsCount={post.commentsCount}
                />
              );
            });
            console.log(data);
          }
        }
        setData(data.data.profileLoadQuery);
      })
      .catch((err) => {
        console.log("Error ", err);
      });
  }, []);

  const addPostClickHandler = async (event) => {
    const _id = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const imgUrl = URL.createObjectURL(event.currentTarget.postImages.files[0]);

    try {
      const response = await fetch("http://localhost:8080/add-post", {
        method: "post",
        headers: {
          Authorization: "Bearer " + token,
          userId: _id,
          email: email,
        },
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Http error! status: ${response.status}");
      }
      const result = await response.json();
      console.log(result);
      const postData = {
        _id: null,
        url: imgUrl,
        title: event.currentTarget.title.value,
        description: event.currentTarget.description.value,
        likeCount: 0,
        commentCount: 0,
        saveCount: 0,
        creationData: new Date().toLocaleDateString(),
      };
      setData((prevData) => {
        return prevData.posts.unshift(postData);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {renderAddPostSec ? (
        <CreatePostSection
          setRenderAddPostSec={setRenderAddPostSec}
          addPostHandler={addPostClickHandler}
        />
      ) : null}
      <div className="grid grid-cols-2">
        <header className="col-start-1 col-end-3 h-screen">
          Pic area
          <div>User Name</div>
        </header>
        <main className="bg-blue-100 h-auto w-[400px]">
          <h2>about</h2>
          <EditProfileBtn />
          <div>About Des</div>
          <div>Badges</div>
          <div>Events Won</div>
        </main>
        <main className="bg-pink-300">
          <ProfilePostBtns setRenderAddPostSec={setRenderAddPostSec} />
          <div className="grid grid-cols-3">{data ? (data.data.profileLoadQuery.posts.length>0 : null}</div>
          <div>
            <LoadMorePosts type="userPosts" />
          </div>
        </main>
      </div>
    </>
  );
}
export default page;