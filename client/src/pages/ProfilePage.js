import * as userActions from "../redux/user/userActions";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import "../css/ProfilePage.css";

const ProfilePage = ({ email, LOGOUT }) => {
  return (
    <div className="profile--page">
      <Navbar />

      <main>
        <h4>{email}</h4>
        <button onClick={LOGOUT}>Logout</button>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    email: state.user.userData.email,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LOGOUT: () => dispatch(userActions.LOGOUT()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
