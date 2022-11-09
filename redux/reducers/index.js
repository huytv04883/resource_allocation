import { loginReducer } from "./loginReudcer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  loginReducer: loginReducer,
});

export default rootReducers;
