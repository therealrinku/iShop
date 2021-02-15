import { NavLink } from "react-router-dom";
import { HiOutlineShoppingBag, FiUser, HiOutlineSearch } from "react-icons/all";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav--bar">
      <section>
        <NavLink to="/" exact>
          iShop
        </NavLink>
      </section>

      <section>
        <NavLink to="/search" exact activeClassName="active-link">
          <HiOutlineSearch />
        </NavLink>
        <NavLink to="/login" exact activeClassName="active-link">
          <FiUser />
        </NavLink>
        <NavLink to="/bag" exact activeClassName="active-link">
          <HiOutlineShoppingBag />
        </NavLink>
      </section>
    </nav>
  );
};

export default Navbar;
