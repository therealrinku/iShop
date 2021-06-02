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

  const linkList = [
    { linkTitle: "Search", linkTarget: "/search" },
    { linkTitle: "Account", linkTarget: "/account" },
    { linkTitle: "Cart", linkTarget: "/cart" },
    { linkTitle: "Apple Phones", linkTarget: "/apple" },
    { linkTitle: "Samsung Phones", linkTarget: "/samsung" },
    { linkTitle: "Pixel Phones", linkTarget: "/pixel" },
  ];

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
                {linkList.slice(-3).map((link) => {
                  return (
                    <Link key={link.linkTitle} href={link.linkTarget}>
                      {link.linkTitle}
                    </Link>
                  );
                })}
              </section>
            </article>
          </ul>

          <ul style={showMobileNav ? { display: "none" } : null}>
            {linkList.slice(0, 3).map((link) => {
              return (
                <Link key={link.linkTitle} href={link.linkTarget}>
                  {link.linkTitle}
                </Link>
              );
            })}
          </ul>

          <button onClick={toggleMobileNav}>{showMobileNav ? <MdClose /> : <BiMenu />}</button>
        </div>
      </nav>

      <nav className={styles.mobileNav} style={!showMobileNav ? { display: "none" } : null}>
        {linkList.map((link) => {
          return (
            <Link key={link.linkTitle} href={link.linkTarget}>
              {link.linkTitle}
            </Link>
          );
        })}
        <button onClick={toggleMobileNav}>Close</button>
      </nav>
    </>
  );
}
