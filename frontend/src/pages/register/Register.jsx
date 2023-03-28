import Form from "../../components/form/Form";
import { registerSubmitHandler } from "./registerSubmitHandler";
import "./register.css";

function Register() {
  return (
    <div className="registerContainer">
      {" "}
      <Form
        title="Register"
        buttonTitleOne="Register"
        buttonTitleTwo="To Login"
        linkTo="/"
        submitCallbackFunction={registerSubmitHandler}
      />
    </div>
  );
}

export default Register;
