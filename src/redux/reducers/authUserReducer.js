import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,

} from "../action-types/auth-action-types";

const initialState = {
  loading: true,
  currentUser: null,
};

export const loginUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        success: true,
        currentUser: action.payload,
      };
    case USER_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case "USER_LOGOUT":
      return {
        loading: false,
        currentUser: null,
      };
    default:
      return state;
  }
};
