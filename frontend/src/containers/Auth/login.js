import { useState } from "react";
import { connect } from "react-redux";
import Button from "../../components/button";
import Input from "../../components/input";
import { inputChangeHandler, handleBlur } from "../../helpers/changeHandler";

import { email, password, required } from "../../helpers/validation";
import ModalComponent from "../../hoc/modal";
import { login } from "../../store/actions";

const Login = (props) => {
  const [loginForm, setLoginForm] = useState({
    email: {
      elementType: "input",
      label: "Email",
      elementConfig: {
        type: "email",
        placeholder: "Email Address",
      },
      validations: [email, required],
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
      value: "",
      isValid: false,
      touched: false,
      blur: false,
      errorMessage: "",
    },
  });

  const [formValid, setFormValid] = useState(false);
  const [clicked, setClicked] = useState(false);

  // useEffect(() => {
  //   props.onPathChange();
  // }, [ ]);

  const handleClick = (event) => {
    setClicked(true);
    event.preventDefault();
    setClicked(true);
    const login = {};
    for (let key in loginForm) {
      login[key] = loginForm[key].value;
    }
    if (!formValid) {
      setFormValid(false);
      event.preventDefault();
    } else {
      props.onlogin(login, props);
    }
  };

  let formArray = [];
  for (let key in loginForm) {
    formArray.push({
      id: key,
      config: loginForm[key],
    });
  }
  let form = formArray.map((form) => (
    <Input
      key={form.id}
      onchange={(event) => {
        const result = inputChangeHandler(
          event,
          form.id,
          loginForm,
          setLoginForm,
          setFormValid
        );
        return result.changeHandler;
      }}
      onblur={(event) => handleBlur(event, form.id, loginForm, setLoginForm)}
      value={form.config.value}
      elementType={form.config.elementType}
      isValid={form.config.isValid}
      touched={form.config.touched}
      message={form.config.errorMessage}
      config={form.config.elementConfig}
      formIsValid={formValid}
      clicked={clicked}
      label={form.config.label}
      blur={form.config.blur}
    />
  ));

  return (
    <section className="login-section">
      <div className="login-section-container">
        <div className="login-section-form w-100 h-100">
          <form className="form">
            <h1 className="mb-md"> LOGIN </h1>
            {props.errorMsg ? <p className="error">{props.errorMsg}</p> : null}
            {form}
            <div className="form-button ">
              <Button onclick={handleClick}>Login</Button>
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
    onlogin: (userData, props) => {
      dispatch(login(userData, props));
    },
    // onPathChange: () => {
    //   dispatch(setInit());
    // },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalComponent(Login, "Ready to chat..."));
