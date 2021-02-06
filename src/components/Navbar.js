import { IoCartOutline, AiOutlineLogin } from "react-icons/all";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <section>
        <Link to="/">Rinkshop</Link>
      </section>

      <section>
        <Link to="/cart">
          <IoCartOutline />
        </Link>
        <Link to="/login">
          <AiOutlineLogin />
        </Link>
      </section>
    </div>
  );
};

export default Navbar;
