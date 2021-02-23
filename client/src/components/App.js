import { BrowserRouter, Route } from "react-router-dom";
import BagPage from "../pages/BagPage";
import ExplorePage from "../pages/ExplorePage";
import Homepage from "../pages/Homepage";
import ItemDetailsPage from "../pages/ItemDetailsPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import * as userActions from "../redux/user/userActions";
import * as cartActions from "../redux/cart/cartActions";
import { connect } from "react-redux";
import { useEffect } from "react";
import { Fragment } from "react";
import Loader from "./Loader";

const App = ({ loading, LOGIN_WITH_TOKEN, email, LOAD_CART }) => {
  const login_token = localStorage.getItem("login_token");

  useEffect(() => {
    if (login_token && !email) {
      LOGIN_WITH_TOKEN(login_token);
    }

    if (email) {
      LOAD_CART(email);
    }
  }, [email]);

  return (
    <Fragment>
      {!loading ? (
        <BrowserRouter>
          <Route path="/" exact component={Homepage} />
          <Route path="/explore" exact component={ExplorePage} />
          <Route path="/product/:productId" exact component={ItemDetailsPage} />
          <Route path="/bag" exact component={BagPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/profile" exact component={ProfilePage} />
        </BrowserRouter>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Loader />
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    email: state.user.userData?.data.email,
    loading: state.user.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LOAD_CART: (email) => dispatch(cartActions.LOAD_CART(email)),
    LOGIN_WITH_TOKEN: (token) => dispatch(userActions.LOGIN_WITH_TOKEN(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
