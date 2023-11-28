"use server";
const profileLoadQuery 
const morePostsQuery = {
  query: `
    query getProfilePostsData($userId: ID!, $page: Int, $limit: Int){
      getprofilePosts(userId: $userId, page: $page, limit: $limit){
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
//------------------------------------------------------------- Function ---------------------------------------
export default async function GetProfilePosts(
  page,
  userId,
  token,
  initialLoad
) {
  let graphqlQuery;
  if (initialLoad) {
    graphqlQuery = profileLoadQuery;
  } else {
    graphqlQuery = morePostsQuery;
  }

  const response = await fetch("http://localhost:8080/graphql", {
    method: "post",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(graphqlQuery),
  });
  const profileData = await response.json();

  const data = initialLoad ? profileData.data.profileLoadQuery: profileData.data.getProfilePosts;
  console.log("Profile Data", data)
  return data;
}
