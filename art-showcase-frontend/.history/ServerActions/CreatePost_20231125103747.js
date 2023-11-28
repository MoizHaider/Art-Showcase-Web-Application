"use server"

export default async function CreatePost(formData, token, userData, postData) {
    try {
        const response = await fetch("http://localhost:8080/add-post", {
          method: "post",
          headers: {
            Authorization: "Bearer " + token,
            userId: userData.userId,
            email: userData.email,
            name: userData.data.userData.name,
            profilePicUrl: userData.data.userData.profilePicUrl
          },
          body: formData,
        });
        
        if (!response.ok) {
          throw new Error("Http error! status: ${response.status}");
        }
        const result = await response.json();
        const postData = {
          _id: null,
          urls: imgUrls,
          title,
          description,
          likeCount: 0,
          commentCount: 0,
          saveCount: 0,
          creationData: new Date().toLocaleDateString(),
        };
    } catch (err) {
        console.log(err);
      }
}
