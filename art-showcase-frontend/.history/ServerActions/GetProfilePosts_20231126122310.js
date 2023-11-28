"use server";
//------------------------------------------------------------- Function ---------------------------------------
export default async function GetProfilePosts( page, userId, token, initialLoad) {
  console.log("This is tokken ours ", page)
  let graphqlQuery;
  if (initialLoad) {
    graphqlQuery = {
      query: `
        query getProfileLoadData($userId: ID!, $page: Int, $limit: Int){
          profileLoadQuery(userId: $userId, page: $page, limit: $limit){
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
        page: page,
        limit: 5,
      },
    };
  } else {
    graphqlQuery = {
      query: `
        query getProfilePostsData($userId: ID!, $page: Int, $limit: Int){
          getProfilePosts(userId: $userId, page: $page, limit: $limit){
            posts{
              _id
              urls
              creationDate
              likesCount
              commentsCount
              saveCount
              title
              description
              user{
                _id
                email
                name
                profilePicUrl
              }
            }
    
          }
        }`,
      variables: {
        userId: userId,
        page: page,
        limit: 5,
      },
    };
  }

  const response = await fetch("http://localhost:8080/graphql", {
    method: "post",
    headers: {
      Authorization: "Bearer " + initialLoad.initialLoad == true ? token: token.token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(graphqlQuery),
  });
  const profileData = await response.json();

  const data = initialLoad == true ? profileData.data.profileLoadQuery: profileData.data.getProfilePosts;
  console.log("Profile Data", data)
  return data;
}
