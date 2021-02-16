import "../css/SignupBox.css";
import Form from "./Form";

const SignupBox = ({ toggle }) => {
  return (
    <div className="signup--box">
      <main>
        <h4>Signup to iShop</h4>
        <Form formType="Signup" />

        <p>
          Already have an account?<button onClick={toggle}>Login</button>
        </p>
      </main>
    </div>
  );
};

export default SignupBox;
