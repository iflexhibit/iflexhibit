import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { postReducer } from "./postReducer";
import { userReducer } from "./userReducer";
import { reportReducer } from "./reportReducer";

export default combineReducers({
  auth: authReducer,
  post: postReducer,
  user: userReducer,
  report: reportReducer,
});
