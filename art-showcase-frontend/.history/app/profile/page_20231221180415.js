import Post from "../components/Post/Post";
import LoadMorePosts from "../components/LoadMorePosts";
import EditProfileBtn from "../components/profile/EditProfileBtn";
import CreatePostSection from "../components/profile/CreatePostSection";
import { cookies } from "next/headers";
import NewPost from "../components/profile/NewPost";
import GetProfilePosts from "@/ServerActions/GetProfilePosts";
import Image from "next/image";
import TypeWriter from "../components/TypeWriter";

async function page() {
  const token = cookies().get("token").value;
  const userId = cookies().get("userId").value;
  const email = cookies().get("email").value;
  const name = cookies().get("name").value;
  const profilePicUrl = cookies().get("profilePicUrl").value;
  const userData = {
    name,
    profilePicUrl,
  };

  const sidebarStyle = {
    position: "sticky",
    top: 0,
    height: "100vh",
    backgroundColor: "#bd3c3c", // Adjust the background color as needed
    padding: "1.5em", // Add padding to the sidebar
    filter: "drop-shadow(0px px 5px #a8a8a8)"
  }

  const data = await GetProfilePosts(1, userId, token, true);
  console.log("data", data);
  const backendAddress = "http://localhost:8080/";

  return (
    <>
      <div className="grid grid-cols-profileDesktopGridCols items-start ">
        <header className="col-start-1 col-end-3 h-screen flex flex-col items-center justify-center relative">
          <div className="w-48 h-48 rounded-full overflow-hidden absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src={`${backendAddress + data.userData.profilePicUrl}`} // Replace with the actual path to your background image
              alt="Profile Image"
              layout="fill"
              objectFit="cover"
              className="rounded-full shadow-2xl "
            />
          </div>

          <Image
            src={`${backendAddress + data.userData.backgroundImgUrl}`} // Replace with the actual path to your full-width image
            alt="Full Width Image"
            layout="fill"
            objectFit="cover"
            className="z-[-1]"
          />

          {/* Name and Title */}
          <div className="text-white text-center relative z-10 mt-20">
            <h1 className="text-3xl font-bold">{data.userData.name}</h1>
            <h2 className="text-lg font-semibold">{data.userData.title}</h2>
          </div>
        </header>
        <main className="bg-accent text-primary h-auto w-[400px]" style={sidebarStyle}>
          {/* <EditProfileBtn /> */}

          <div className = "flex justify-end">
          <CreatePostSection
            token={token}
            userId={userId}
            email={email}
            name={name}
            profilePicUrl={profilePicUrl}
            data={data}
            
          />
          </div>
       
          <div className="font-bold text-[2em]">About</div>
          <div>{data.userData.about}</div>
        </main>
        <main className="w-full h-auto p-2 flex flex-col items-center gap-y-10 ">
          
          <div className="w-[90%] grid grid-cols-1 gap-y-5 justify-center auto-col-auto">
            <NewPost data={data} userData={userData} />
            {data
              ? data.posts.length > 0
                ? data.posts.map((post) => (
                    <Post
                      server={true}
                      userData={userData}
                      postId={post._id}
                      title={post.title}
                      description={post.description}
                      likesCount={post.likesCount}
                      creationDate={post.creationDate}
                      commentsCount={post.commentsCount}
                      urls={post.urls}
                      key={post._id}
                      token={token}
                      liked={post.liked}
                      userId={userId}
                    />
                  ))
                : null
              : null}
          </div>
          <div>
            <LoadMorePosts token={token} userId={userId} location="profile" />
          </div>
        </main>
      </div>
    </>
  );
}
export default page;
