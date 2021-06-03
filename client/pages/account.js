import { useState } from "react";
import styles from "../styles/AccountPage.module.css";

export default function AccountPage() {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const [loginMode, setLoginMode] = useState(true);

  return (
    <main className={styles.accountPage}>
      <form>
        <u style={{ marginBottom: "15px" }}>{loginMode ? "LOGIN" : "SIGNUP"}</u>
        <label for="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label for="password1">Password</label>
        <input type="password" id="password1" value={password1} onChange={(e) => setPassword1(e.target.value)} />
        {!loginMode ? (
          <>
            <label for="password2">Repeat Password</label>
            <input type="password" id="password2" value={password2} onChange={(e) => setPassword2(e.target.value)} />
          </>
        ) : null}
        <button>Submit</button>
        <button type="button" onClick={() => setLoginMode((prev) => !prev)}>
          {loginMode ? "Sign up" : "Log in"}
        </button>
      </form>
    </main>
  );
}
