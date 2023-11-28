"use server"

export default async function GetProfilePosts(page, userId) {
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
    
      const response = await fetch("http://localhost:8080/graphql", {
        method: "post",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(graphqlQuery),
      });
      const profileData = await response.json();
    
      data = profileData.data.profileLoadQuery;
      return data;
}
