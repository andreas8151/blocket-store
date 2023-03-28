import Form from "../../components/form/Form";
import React, { useEffect } from "react";
import { logInSubmitHandler } from "./loginSubmitHandler";
import "./login.css";

function Login() {
  useEffect(() => {
    async function loggedInVerification() {
      const res = await fetch("http://localhost:5050/auth/loggedInValidation", {
        method: "GET",
        credentials: "include", //include cookies
      });

      if (res.status === 200) {
        window.location.href = "/loggedIn";
      }
    }
    loggedInVerification();
  }, []);

  return (
    <div className="logInContainer">
      <Form
        title="Login"
        buttonTitleOne="Login"
        buttonTitleTwo="To Register"
        linkTo="/register"
        submitCallbackFunction={logInSubmitHandler}
      />
    </div>
  );
}

export default Login;
