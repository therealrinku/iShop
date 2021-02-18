import * as userActions from "../redux/user/userActions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaRegUser } from "react-icons/all";
import "../css/ProfilePage.css";

const ProfilePage = ({ email, LOGOUT }) => {
  const history = useHistory();
  const Logout = () => {
    LOGOUT();
    history.push("/");
  };

  return (
    <div className="profile--page">
      <Navbar />

      <main>
        <span>
          <FaRegUser />
          <h4>{email}</h4>
        </span>

        <button onClick={Logout}>Logout</button>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    email: state.user.userData.data.email,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LOGOUT: () => dispatch(userActions.LOGOUT()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
