import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { MdKeyboardArrowDown, MdClose } from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";

export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <>
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

          <button onClick={() => setShowMobileNav((prev) => !prev)}>
            <BiMenu />
          </button>
        </div>
      </nav>

      <nav className={styles.mobileNav} style={!showMobileNav ? { display: "none" } : null}>
        <button onClick={() => setShowMobileNav((prev) => !prev)}>
          <MdClose />
        </button>
        <Link href="/search">Search</Link>
        <Link href="/login">Account</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/apple">Apple Phones</Link>
        <Link href="/samsung">Samsung Phones</Link>
        <Link href="/pixel">Pixel Phones</Link>
      </nav>
    </>
  );
}
