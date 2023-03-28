import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../input/Input";
import "./form.css";

function Form({
  submitCallbackFunction,
  title,
  linkTo,
  buttonTitleTwo,
  buttonTitleOne,
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [callbackResult, setCallbackResult] = useState("");

  async function submitHandler(event) {
    event.preventDefault();
    const res = await submitCallbackFunction(username, password);
    setCallbackResult(res);
  }

  return (
    <>
      <div className="formContainer">
        <form onSubmit={submitHandler}>
          <h1>{title}</h1>
          <label>Username</label>
          <Input
            type="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <label>Password</label>
          <Input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit" className="button" title="Login">
            {buttonTitleOne}
          </button>
          <Link to={linkTo}>
            <button type="submit" className="button registerButton">
              {buttonTitleTwo}
            </button>
          </Link>
        </form>{" "}
        <p className="callBackResult">{callbackResult}</p>
      </div>
    </>
  );
}

export default Form;
