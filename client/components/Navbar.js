import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiCart } from "react-icons/bi";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <div>
        <Link href="/">phonyoxx</Link>

        <ul>
          <Link href="/explore">Explore</Link>
          <Link href="/login">Login</Link>
          <button onClick={() => router.push("/bag")}>
            <BiCart />
          </button>
        </ul>
      </div>
    </nav>
  );
}
