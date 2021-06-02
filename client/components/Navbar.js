import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <ul>
          <Link href="/">phonyoxx</Link>

          <article className={styles.showDropdown}>
            <button>
              <p>Categories</p>
              <MdKeyboardArrowDown />
            </button>

            <section className={styles.dropdown}>
              <Link href="/apple">Apple Phones</Link>
              <Link href="/samsung">Samsung Phones</Link>
              <Link href="/pixel">Pixel Phones</Link>
            </section>
          </article>
        </ul>

        <ul>
          <Link href="/search">Search</Link>
          <Link href="/login">Account</Link>
          <Link href="/cart">Cart</Link>
        </ul>
      </div>
    </nav>
  );
}
