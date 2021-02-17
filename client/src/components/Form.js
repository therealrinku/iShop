import { useState } from "react";
import server_url from "../server_url";
import { useHistory } from "react-router-dom";
import axios from "axios";
import * as userActions from "../redux/user/userActions";
import { connect } from "react-redux";
import "../css/Form.css";

const Form = ({ formType, LOGIN }) => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const Signup = (e) => {
    e.preventDefault();
    if (
      email.trim().length >= 5 &&
      email.trim().length <= 50 &&
      email.includes("@") &&
      !email.includes(" ")
    ) {
      if (password.trim().length >= 5 && password.trim().length <= 50) {
        setLoading(true);
        axios
          .post(server_url + "/auth/signup", { email, password })
          .then((res) => {
            setLoading(false);
            if (res.data === "success") {
              setMessage("Account created, Now you can login.");
              setTimeout(() => {
                window.location.reload();
              }, 2000);
            } else {
              setMessage(res.data);
            }
          })
          .catch((err) => {
            setLoading(false);
            setMessage(err.message);
          });
      } else {
        setMessage("Password must be 5 to 50 characters long.");
      }
    } else {
      setMessage("Email must be valid between 5 to 50 characters.");
    }
  };

  const Login = (e) => {
    e.preventDefault();

    setLoading(true);
    axios
      .post(server_url + "/auth/login", { email, password })
      .then((res) => {
        setLoading(false);
        if (typeof res.data === "object") {
          LOGIN(res.data);
          history.push("/profile");
        } else {
          setMessage(res.data);
        }
      })
      .catch((err) => {
        setLoading(false);
        setMessage(err.message);
      });
  };

  return (
    <form onSubmit={formType === "Signup" ? Signup : Login}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button disabled={loading}>{formType}</button>
      <p
        style={
          message.includes("created")
            ? { color: "green", fontSize: "14px" }
            : { color: "red", fontSize: "14px" }
        }
      >
        {message}
      </p>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    LOGIN: (data) => dispatch(userActions.LOGIN(data)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
