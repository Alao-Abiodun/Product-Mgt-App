import * as actionTypes from "../types";

const intialState = {
  token: null,
  userID: null,
  loading: false,
  error: {},
};

const reducer = (state = intialState, { type, payload, error }) => {
  switch (type) {
    case actionTypes.REGISTER__START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.REGISTER__SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        error: null,
      };
    case actionTypes.REGISTER__FAILED:
      return {
        ...state,
        loading: false,
        error: error,
      };
    case actionTypes.LOGIN__START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.LOGIN__SUCCESS:
      return {
        loading: false,
        token: payload.accessToken,
        userID: payload.userID,
      };
    case actionTypes.LOGIN__FAILED:
      console.log(error);
      return {
        loading: false,
        error: error,
        token: null,
      };
    // case actionTypes.SET__INIT:
    //   return {
    //     ...state,
    //     token: null,
    //     user: null,
    //     loading: false,
    //     error: {},
    //   };

    // case actionTypes.SET__INIT:
    //   return {
    //     ...state,
    //     token: null,
    //     user: null,
    //     loading: false,
    //     error: null,
    //   };

    default:
      return state;
  }
};

export default reducer;
