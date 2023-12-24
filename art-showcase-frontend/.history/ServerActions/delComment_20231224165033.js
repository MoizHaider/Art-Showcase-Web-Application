import React from 'react'

export default function delComment(token, postId, commentId) {
    const graphqlQuery = {
        query: `mutation delCommnentQuery( $postId: ID, $commentId: ID){
                addComment(postId: $postId, commentId: $commentId)
        }`,
        variables: {
            postId,
            commentId
        }
    }
    const response = await fetch("http://localhost:8080/graphql", {
      method: "post",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(graphqlQuery),
    })
    const result = await response.json()
    return result.data.addComment;
}
