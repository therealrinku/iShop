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
        <NavLink to="/search">
          <HiOutlineSearch />
        </NavLink>
        <NavLink to="/login">
          <FiUser />
        </NavLink>
        <NavLink to="/bag">
          <HiOutlineShoppingBag />
        </NavLink>
      </section>
    </nav>
  );
};

export default Navbar;
