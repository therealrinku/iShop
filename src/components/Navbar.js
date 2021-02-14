import { NavLink } from "react-router-dom";
import {
  HiOutlineShoppingBag,
  FiUser,
  HiOutlineSearch,
  BiX,
} from "react-icons/all";
import { useState } from "react";
import "../css/Navbar.css";

const Navbar = () => {
  const [showMobileSearchBar, setShowMobileSearchBar] = useState(false);

  return (
    <nav className="nav--bar">
      <section style={showMobileSearchBar ? { display: "none" } : null}>
        <NavLink to="/">iShop</NavLink>
      </section>

      <section style={showMobileSearchBar ? { display: "none" } : null}>
        <input type="text" placeholder="What are you looking for?" />
      </section>

      <div
        className="mobile-search-bar"
        style={!showMobileSearchBar ? { display: "none" } : null}
      >
        <input type="text" placeholder="What are you looking for?" />
        <button
          className="cancel-btn"
          style={!showMobileSearchBar ? { display: "none" } : null}
          onClick={() => setShowMobileSearchBar(false)}
        >
          <BiX />
        </button>
      </div>

      <section style={showMobileSearchBar ? { display: "none" } : null}>
        <button
          className="mobile-search-btn"
          onClick={() => setShowMobileSearchBar(true)}
        >
          <HiOutlineSearch />
          <p>Search</p>
        </button>
        <NavLink to="/login">
          <FiUser />
          <p>Login</p>
        </NavLink>
        <NavLink to="/bag">
          <HiOutlineShoppingBag />
          <p>Bag</p>
        </NavLink>
      </section>
    </nav>
  );
};

export default Navbar;
