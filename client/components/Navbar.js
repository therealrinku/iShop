import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { MdKeyboardArrowDown, MdClose } from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const router = useRouter();

  const toggleMobileNav = () => {
    setShowMobileNav((prev) => !prev);

    if (!showMobileNav) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  };

  const linkList = [
    { linkTitle: "Search", linkTarget: "/search" },
    { linkTitle: "Account", linkTarget: "/account" },
    { linkTitle: "Cart", linkTarget: "/cart" },
    { linkTitle: "Apple Phones", linkTarget: "/products/apple" },
    { linkTitle: "Samsung Phones", linkTarget: "/products/samsung" },
    { linkTitle: "Pixel Phones", linkTarget: "/products/pixel" },
    { linkTitle: "Other Phones", linkTarget: "/products/other" },
  ];

  const toggleMobileNavAndGoToRoute = (route) => {
    router.push(route);
    toggleMobileNav();
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div>
          <ul>
            <b>
              <Link href="/">phonyoxx</Link>
            </b>

            <article className={styles.showDropdown}>
              <button>
                <p>Categories</p>
                <MdKeyboardArrowDown />
              </button>

              <section className={styles.dropdown}>
                {linkList.slice(-4).map((link) => {
                  return (
                    <Link key={link.linkTitle} href={link.linkTarget}>
                      {link.linkTitle}
                    </Link>
                  );
                })}
              </section>
            </article>
          </ul>

          <ul>
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
            <a key={link.linkTitle} onClick={() => toggleMobileNavAndGoToRoute(link.linkTarget)}>
              {link.linkTitle}
            </a>
          );
        })}
        <button onClick={toggleMobileNav}>Close</button>
      </nav>
    </>
  );
}
