import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { MdKeyboardArrowDown, MdClose } from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";

export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setShowMobileNav((prev) => !prev);

    if (!showMobileNav) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div>
          <ul>
            <Link href="/">phonyoxx</Link>

            <article className={styles.showDropdown} style={showMobileNav ? { display: "none" } : null}>
              <button>
                <p>Categories</p>
                <MdKeyboardArrowDown />
              </button>

              <section className={styles.dropdown} style={showMobileNav ? { display: "none" } : null}>
                <Link href="/apple">Apple Phones</Link>
                <Link href="/samsung">Samsung Phones</Link>
                <Link href="/pixel">Pixel Phones</Link>
              </section>
            </article>
          </ul>

          <ul style={showMobileNav ? { display: "none" } : null}>
            <Link href="/search">Search</Link>
            <Link href="/login">Account</Link>
            <Link href="/cart">Cart</Link>
          </ul>

          <button onClick={toggleMobileNav}>{showMobileNav ? <MdClose /> : <BiMenu />}</button>
        </div>
      </nav>

      <nav className={styles.mobileNav} style={!showMobileNav ? { display: "none" } : null}>
        <Link href="/search">Search</Link>
        <Link href="/login">Account</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/apple">Apple Phones</Link>
        <Link href="/samsung">Samsung Phones</Link>
        <Link href="/pixel">Pixel Phones</Link>
        <button onClick={toggleMobileNav}>Close</button>
      </nav>
    </>
  );
}
