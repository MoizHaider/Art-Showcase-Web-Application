import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/nav"
import EventBackBtn from "../event-back-btn"
import EventForwardBtn from "./components/home/event-forward-btn";
import { useState } from "react";

export default function Home() {
  //fetch function to load event files and paginated amount of Trending posts
  cont {data, setData]
  return (
    <>
      <Nav/>
      <header>Welcome page</header>
      <main  className = 'main'>
        <EventBackBtn data = {"hello"}/>
          events
        <EventForwardBtn/>
        </main>
      <main>Highest Rated Arts</main>
      <footer>Copyright material</footer>
    </>
  );
}