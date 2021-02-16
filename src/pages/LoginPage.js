import { Fragment, useState } from "react";
import Navbar from "../components/Navbar";
import SignupBox from "../components/SignupBox";
import Backdrop from "../components/Backdrop";
import "../css/LoginPage.css";
import Form from "../components/Form";

const LoginPage = () => {
  const [showSignupBox, setShowSignupBox] = useState(false);

  const toggleSignupBox = () => {
    setShowSignupBox((prev) => !prev);
  };

  return (
    <div className="login--page">
      <Navbar />

      <main className="main">
        <h4>Login to iShop</h4>
        <Form formType="Login" />

        <p>
          Don't have an account?
          <button onClick={toggleSignupBox}>Signup</button>
        </p>
      </main>

      {showSignupBox ? (
        <Fragment>
          <Backdrop toggle={toggleSignupBox} />
          <SignupBox toggle={toggleSignupBox} />
        </Fragment>
      ) : null}
    </div>
  );
};

export default LoginPage;
