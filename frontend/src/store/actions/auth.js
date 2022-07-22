// @ts-nocheck
import * as actionTypes from "../types";
import axios from "../../constants/axioscreate";
import jwt from "jsonwebtoken";

export const registerStart = () => {
  return {
    type: actionTypes.REGISTER__START,
  };
};

export const registerSuccess = (payload) => {
  return {
    type: actionTypes.REGISTER__SUCCESS,
    payload,
  };
};

export const registerFailed = (error) => {
  return {
    type: actionTypes.REGISTER__FAILED,
    error,
  };
};

export const registerUser = (userData, props) => (dispatch) => {
  console.log(userData);
  dispatch(registerStart());
  axios
    .post("/auth/register", userData)
    .then((result) => {
      console.log(result);
      dispatch(registerSuccess(result.data.user));
      props.history.push("/login");
    })
    .catch((error) => {
      dispatch(registerFailed(error.response.data));
    });
};

export const loginStart = () => {
  return {
    type: actionTypes.LOGIN__START,
  };
};

export const loginSuccess = (payload) => {
  return {
    type: actionTypes.LOGIN__SUCCESS,
    payload,
  };
};

export const loginFailed = (error) => {
  return {
    type: actionTypes.LOGIN__FAILED,
    error,
  };
};

// export const checkAuthTimeout = (expire) => {
//   console.log(expire)
//   return (dispatch) => {
//     setTimeout(() => {
//       dispatch(logout());
//     }, expire * 1000);
//   };
// };

export const login = (userData, props) => (dispatch) => {
  dispatch(loginStart());
  axios
    .post("/auth/login", userData)
    .then((result) => {
      const token = result.data.token;
      const id = result.data.id;
      localStorage.setItem("token", token);
      localStorage.setItem("userID", id);
      console.log(result.data);
      const payload = {
        token: result.data.token,
        userID: result.data.id,
      };
      dispatch(loginSuccess(payload));
      props.history.push("/chat");
    })
    .catch((error) => {
      console.log(error.response.data);
      dispatch(loginFailed(error.response.data));
    });
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userID");
  return {
    type: actionTypes.LOGOUT__INIT,
  };
};

export const checkAuth = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (!token) {
    dispatch(logout());
  } else {
    const expiresIn = jwt.decode(token).exp;
    if (new Date(expiresIn * 1000) < new Date()) {
      console.log(true);
      dispatch(logout());
    } else {
      const userID = localStorage.getItem("userID");
      const payload = {
        accessToken: token,
        userID,
      };
      dispatch(loginSuccess(payload));
    }
  }
};

// export const setInit = () => {
//   return {
//     type: actionTypes.SET__INIT,
//   };
// };
