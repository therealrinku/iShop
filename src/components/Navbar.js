import { NavLink } from "react-router-dom";
import { HiOutlineShoppingBag, FiUser, HiOutlineSearch } from "react-icons/all";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav--bar">
      <section>
        <NavLink to="/">iShop</NavLink>
      </section>

      <section>
        <input type="text" placeholder="What are you looking for?" />
      </section>

      <section>
        <button className="mobile-search-btn">
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
