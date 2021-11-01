import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { postReducer } from "./postReducer";
import { userReducer } from "./userReducer";

export default combineReducers({
  auth: authReducer,
  post: postReducer,
  user: userReducer,
});
