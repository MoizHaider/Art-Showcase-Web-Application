"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Events from "./components/home/Events";
import TrendingPosts from "./components/Post/Post";
import LoadMorePosts from "./components/Post/LoadMorePosts";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  //fetch function to load event files and paginated amount of Trending posts
  const [data, setData] = useState(null);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
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

  useEffect(() => {
    const response = fetch("http://localhost:8080/graphql", {
      method: "post",
      headers: {
        Authorization: "Bearer ",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(graphqlQuery),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data)
      }).catch
      
  }, []);

  return (
    <>
      <header>Welcome page</header>
      <main className="main">
        <Events />
      </main>
      <main>
        <TrendingPosts type="homePosts" />
      </main>
      <LoadMorePosts type="homePosts" />
      <footer>Copyright material</footer>
    </>
  );
}
