import { IoCartOutline, AiOutlineEye } from "react-icons/all";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <section>
        <Link to="/">Rinkshop</Link>
      </section>

      <section>
        <Link to="/explore">
          <AiOutlineEye />
          <p>Explore</p>
        </Link>
        <Link to="/cart">
          <IoCartOutline />
          <p>My Cart(2)</p>
        </Link>
      </section>
    </div>
  );
};

export default Navbar;
