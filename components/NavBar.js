import styles from "../styles/Home.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
};

export default NavBar;
