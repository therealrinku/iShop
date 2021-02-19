import { NavLink } from "react-router-dom";
import { HiOutlineShoppingBag, FiUser, HiOutlineSearch } from "react-icons/all";
import { Badge } from "@material-ui/core";
import { connect } from "react-redux";
import { useState, Fragment } from "react";
import SearchBox from "./SearchBox";
import Backdrop from "./Backdrop";
import "../css/Navbar.css";

const Navbar = ({ loggingInUser, cartItemsLength, user }) => {
  const [showSearchBox, setShowSearchBox] = useState(false);

  const toggleOverflow = () => {
    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  const toggleSearchBox = () => {
    toggleOverflow();
    setShowSearchBox((prev) => !prev);
  };

  return (
    <Fragment>
      <nav className="nav--bar">
        <section>
          <NavLink to="/" exact>
            iShop
          </NavLink>
        </section>

        <section>
          <button onClick={toggleSearchBox}>
            <HiOutlineSearch />
          </button>
          <NavLink
            to={!loggingInUser ? (user ? "/profile" : "/login") : "/"}
            exact
            activeClassName="active-link"
          >
            <FiUser />
          </NavLink>

          <NavLink to="/bag" exact activeClassName="active-link">
            <Badge badgeContent={cartItemsLength} showZero>
              <HiOutlineShoppingBag />
            </Badge>
          </NavLink>
        </section>
      </nav>

      {showSearchBox ? (
        <Fragment>
          <Backdrop toggle={toggleSearchBox} />
          <SearchBox toggle={toggleSearchBox} />
        </Fragment>
      ) : null}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    loggingInUser: state.user.loading,
    cartItemsLength: state.cart.cartItems.length,
    user: state.user.userData,
  };
};

export default connect(mapStateToProps)(Navbar);
