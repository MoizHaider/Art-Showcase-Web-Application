import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./"

export default function Home() {
  return (
    <>
      <header>Welcome page</header>
      <main  className = 'main'>events</main>
      <main>Highest Rated Arts</main>
      <footer>Copyright material</footer>
    </>
  );
}
