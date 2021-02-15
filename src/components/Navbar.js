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
        <NavLink to="/search" activeClassName="active">
          <HiOutlineSearch />
        </NavLink>
        <NavLink to="/login" activeClassName="active">
          <FiUser />
        </NavLink>
        <NavLink to="/bag" activeClassName="active">
          <HiOutlineShoppingBag />
        </NavLink>
      </section>
    </nav>
  );
};

export default Navbar;
