import { BrowserRouter, Route } from "react-router-dom";
import BagPage from "../pages/BagPage";
import ExplorePage from "../pages/ExplorePage";
import Homepage from "../pages/Homepage";
import ItemDetailsPage from "../pages/ItemDetailsPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import * as userActions from "../redux/user/userActions";
import { connect } from "react-redux";
import { useEffect } from "react";

const App = ({ LOGIN_WITH_TOKEN }) => {
  const login_token = localStorage.getItem("login_token");

  useEffect(() => {
    if (login_token) {
      LOGIN_WITH_TOKEN(login_token);
    }
  }, []);

  return (
    <BrowserRouter>
      <Route path="/" exact component={Homepage} />
      <Route path="/explore" exact component={ExplorePage} />
      <Route path="/product/:productId" exact component={ItemDetailsPage} />
      <Route path="/bag" exact component={BagPage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/profile" exact component={ProfilePage} />
    </BrowserRouter>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    LOGIN_WITH_TOKEN: (token) => dispatch(userActions.LOGIN_WITH_TOKEN(token)),
  };
};

export default connect(null, mapDispatchToProps)(App);
