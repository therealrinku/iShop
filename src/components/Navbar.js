import { NavLink } from "react-router-dom";
import { HiOutlineShoppingBag, FiUser } from "react-icons/all";

const Navbar = () => {
  return (
    <nav className="nav--bar">
      <section>
        <NavLink to="/">iShop</NavLink>
      </section>

      <section>
        <input type="text" placeholder="What are you looking for?" />
        <button>
          <FiUser />
          <p>Login</p>
        </button>
        <button>
          <HiOutlineShoppingBag />
          <p>Bag</p>
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
