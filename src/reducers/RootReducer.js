// Assuming you have more then one reducer
import { combineReducers } from "redux";
import userReducer from "./User";

export default combineReducers({
  userReducer,
});
