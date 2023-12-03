import React from "react";

export default async function LikePost(postId, userId, liked) {
  const likeQuery = {
    query: `
      mutation likePost($liked: Boolean, $postId: ID!, $userId: ID){
        likePost(liked: $liked, postId: $postId, userId: $userId)
      }
    `,
    variables: {
      postId,
      userId,
      liked,
    },
  };

    const response = await fetch("http://localhost:8080/graphql", {
      method: "post",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(likeQuery),
    })
      const result = res.json())
      
}
