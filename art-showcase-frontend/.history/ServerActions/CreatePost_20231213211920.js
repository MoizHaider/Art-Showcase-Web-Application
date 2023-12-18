"use server";

export default async function CreatePost(formData, token, userData, postInfo) {
  console.log("running serverrrrrrrrrrrrrrrrr");

  const response = await fetch("http://localhost:8080/add-post", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      userId: userData.userId,
      email: userData.email,
      name: userData.name,
      profilePicUrl: userData.profilePicUrl,
    },
    body: formData,
  });
  console.log("result", result);
  if (!response.ok) {
    throw new Error("Http error! status: ${response.status}");
  }
  const result = await response.json();
  
  const postData = {
    _id: null,
    urls: postInfo.imgUrls,
    title: postInfo.title,
    description: postInfo.description,
    likeCount: 0,
    commentCount: 0,
    saveCount: 0,
    creationData: new Date().toLocaleDateString(),
  };
  return postData;
}