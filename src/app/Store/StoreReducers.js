import { combineReducers } from "redux";
import sendOtpReducer from "./Slices/sendOtpSlice";

const reducers = combineReducers({
  sendOtpReducer: sendOtpReducer,
});

export default reducers;
