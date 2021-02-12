import { IoCartOutline, AiOutlineEye } from "react-icons/all";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <section>
        <NavLink to="/">Rinkshop</NavLink>
      </section>

      <section>
        <NavLink
          to="/explore"
          activeStyle={{ background: "rgba(0, 0, 0, 0.05)" }}
        >
          <AiOutlineEye />
          <p>Explore</p>
        </NavLink>
        <NavLink
          to="/cart"
          activeStyle={{ background: " rgba(0, 0, 0, 0.05)" }}
        >
          <IoCartOutline />
          <p>My Cart(3)</p>
        </NavLink>
      </section>
    </div>
  );
};

export default Navbar;
