"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Events from "./components/home/Events";
import TrendingPosts from "./components/Post/Post";
import LoadMorePosts from "./components/Post/LoadMorePosts";
import { useRouter } from "next/navigation";



export default async function Home() {
  //fetch function to load event files and paginated amount of Trending posts
  const [data, setData] = useState(null)
  const token = localStorage.getItem("token");
  const _id = localStorage.getItem("_id");
  console.log(token);
  const graphqlQuery = {
    query: `
      {
        homeLoadQuery{
          posts{
            _id
            creationDate
            likesCount
            commentsCount
            title
            description
          }
          events{
            _id
            imgUrl
          }
        }
      }
    `,
  };
  
    const response =  fetch("http://localhost:8080/graphql", {
      method: "post",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(graphqlQuery),
    })
    let data = await response.json();
  

  return (
    <>
      <header>Welcome page</header>
      <main className="main">
        <Events />
      </main>
      <main>
        <TrendingPosts type = "homePosts"/>
      </main>
      <LoadMorePosts type = "homePosts"/>
      <footer>Copyright material</footer>
    </>
  );
}
