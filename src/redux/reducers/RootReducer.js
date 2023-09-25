import { combineReducers } from "redux";
import { loginUserReducer } from "./authUserReducer";

export const rootReducer = combineReducers({
  loginUserReducer,
 
});
