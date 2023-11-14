import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/nav"
import Events from "./components/home/events"


export default function Home() {
  //fetch function to load event files and paginated amount of Trending posts
  const onBtnClickHandler = ()=>{
    console.log("hello")
  }
  return (
    <>
      <Nav data = "Hello"/>
      <header>Welcome page</header>
        <main  className = 'main'>
          <Button onBtnClickHandler = {onBtnClickHandler}/>
        </main>
      <main>Highest Rated Arts</main>
      <footer>Copyright material</footer>
    </>
  );
}