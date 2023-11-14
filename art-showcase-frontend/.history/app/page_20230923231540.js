import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/nav"
import Button from "./components/home/event-btn"


export default function Home() {
  //fetch function to load event files and paginated amount of Trending posts

  return (
    <>
      <Nav data = "Hello"/>
      <header>Welcome page</header>
        <main  className = 'main'>
          <Button/>
        </main>
      <main>Highest Rated Arts</main>
      <footer>Copyright material</footer>
    </>
  );
}