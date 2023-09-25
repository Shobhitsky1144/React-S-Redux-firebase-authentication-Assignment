import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile 
} from "firebase/auth";
import { toast } from "react-toastify";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from "../action-types/auth-action-types";

export const loginUser = (auth, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const data = await signInWithEmailAndPassword(auth, email, password);

    toast.success("Login successfull");
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    window.location.href = "/";
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: USER_LOGIN_FAIL, payload: error });
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch({ type: "USER_LOGOUT" });
  window.location.href = "/login";
};

export const registerUser = (auth, email, password,displayName) => async () => {
  try {
    let res=await createUserWithEmailAndPassword(auth, email, password,displayName);
    await updateProfile (res.user,{displayName})
    toast.success("Registered successfully.");
    window.location.href = "/login";
  } catch (error) {
    toast.error(error.message);
  }
};
