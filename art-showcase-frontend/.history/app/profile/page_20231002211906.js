"use client"
import React from "react";
import Post from "../components/Post/Post";
import LoadMorePosts from "../components/Post/LoadMorePosts";
import EditProfileBtn from "../components/profile/EditProfileBtn";
import ProfilePostBtns from "../components/profile/ProfilePostBtns";
import {useState, useEffect} from "react"


async function page() {
  const [data, setData] = useState(null);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const graphqlQuery = {
    query:`
    query getProfileLoadData($userId: ID!){
      profileLoadQuery(userId: $userId){
        profileData{
          name
          title
        }
      }
    }`,
    variables: {
      userId: "82hd84"
    }
  }
  useEffect(()=>{
    
  })
  const response = await fetch("http://localhost:8080/graphql", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(graphqlQuery),
  })
  const data = await response.json();
  console.log(data.data)
 
  return (
    <>
      <header>
        Pic area
        <span>User Name</span>
      </header>
      <main>
        <div>
            <h2>about</h2>
            <EditProfileBtn/>
          <div>About Des</div>
          <div>Badges</div>
          <div>Events Won</div>
        </div>
      </main>
      <main>
        <ProfilePostBtns />
        <div>
          <Post type="userPosts" />
        </div>
        <div>
          <LoadMorePosts type="userPosts" />
        </div>
      </main>
    </>
  );
}
export default page;