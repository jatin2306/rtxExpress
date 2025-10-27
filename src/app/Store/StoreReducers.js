import { combineReducers } from "redux";
import sendOtpReducer from "./Slices/sendOtpSlice";
import utilityReducer from "./Slices/utilitySlice";

const reducers = combineReducers({
  sendOtpReducer: sendOtpReducer,
  utilityReducer: utilityReducer,
});

export default reducers;
