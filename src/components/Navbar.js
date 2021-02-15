import { NavLink } from "react-router-dom";
import { HiOutlineShoppingBag, FiUser, HiOutlineSearch } from "react-icons/all";
import "../css/Navbar.css";
import { Badge } from "@material-ui/core";
import { connect } from "react-redux";

const Navbar = ({ cartItemsLength }) => {
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
          <Badge badgeContent={cartItemsLength} color="black" showZero>
            <HiOutlineShoppingBag />
          </Badge>
        </NavLink>
      </section>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItemsLength: state.cart.cartItems.length,
  };
};

export default connect(mapStateToProps)(Navbar);
