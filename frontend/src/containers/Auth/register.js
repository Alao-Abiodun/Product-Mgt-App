import { useState } from "react";
import { connect } from "react-redux";
import ModalComponent from "../../hoc/modal";

import Button from "../../components/button";
import Input from "../../components/input";
import { handleBlur, inputChangeHandler } from "../../helpers/changeHandler";
import {
  confirmPassword,
  email,
  name,
  password,
  required,
} from "../../helpers/validation";

import { registerUser } from "../../store/actions/index";

const Register = (props) => {
  const [registerForm, setRegisterForm] = useState({
    firstName: {
      elementType: "input",
      label: "First Name",
      elementConfig: {
        type: "text",
        placeholder: "First Name",
      },
      validations: [name],
      isValid: false,
      touched: false,
      value: "",
      blur: false,

      errorMessage: "",
    },
    lastName: {
      elementType: "input",
      label: "Last Name",
      elementConfig: {
        type: "text",
        placeholder: "Last Name",
      },
      validations: [name],
      isValid: false,
      touched: false,
      value: "",
      blur: false,

      errorMessage: "",
    },

    email: {
      elementType: "input",
      label: "E-mail",
      elementConfig: {
        type: "email",
        placeholder: "Email",
      },
      validations: [email],
      value: "",
      isValid: false,
      touched: false,
      blur: false,
      errorMessage: "",
    },

    password: {
      elementType: "input",
      label: "Password",
      elementConfig: {
        type: "password",
        placeholder: "Password",
      },
      validations: [required, password],
      isValid: false,
      value: "",
      touched: false,
      blur: false,

      errorMessage: "",
    },
    confirmPassword: {
      elementType: "input",
      label: "Confirm Password",
      elementConfig: {
        type: "password",
        placeholder: "Confirm Your Password",
      },
      validations: [confirmPassword],
      isValid: false,
      value: "",
      touched: false,
      blur: false,
      errorMessage: "",
    },
  });

  const [formValid, setFormValid] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setClicked(true);
    const register = {};
    for (let key in registerForm) {
      register[key] = registerForm[key].value;
    }
    if (!formValid) {
      setFormValid(false);
      event.preventDefault();
    } else {
      props.onRegister(register, props);
    }
  };

  let formArray = [];
  for (let key in registerForm) {
    formArray.push({
      id: key,
      config: registerForm[key],
    });
  }

  let form = formArray.map((form) => (
    <Input
      key={form.id}
      config={form.config.elementConfig}
      onchange={(event) => {
        const result = inputChangeHandler(
          event,
          form.id,
          registerForm,
          setRegisterForm,
          setFormValid
        );
        return result.changeHandler;
      }}
      onblur={(event) =>
        handleBlur(event, form.id, registerForm, setRegisterForm)
      }
      value={form.config.value}
      elementType={form.config.elementType}
      isValid={form.config.isValid}
      touched={form.config.touched}
      message={form.config.errorMessage}
      formIsValid={formValid}
      clicked={clicked}
      label={form.config.label}
      blur={form.config.blur}
    />
  ));

  return (
    <section className="register-section">
      <div className="register-section-container">
        <div className="register-section-form w-100 h-100">
          <form className="form">
            <h1 className="mb-md">REGISTER</h1>
            {props.errorMsg ? (
              <p className="error mb-sm">{props.errorMsg}</p>
            ) : null}
            {form}
            <div className="form-button mt-sm">
              <Button onclick={handleClick}>Register</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.auth.loading,
    errorMsg: state.auth.error ? state.auth.error.message : null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRegister: (userData, props) => {
      dispatch(registerUser(userData, props));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalComponent(Register, "User registration in progress"));
