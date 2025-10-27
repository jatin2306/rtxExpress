import { combineReducers } from "redux";
import sendOtpReducer from "./Slices/sendOtpSlice";
import utilityReducer from "./Slices/UtilitySlice";

const reducers = combineReducers({
  sendOtpReducer: sendOtpReducer,
  utilityReducer: utilityReducer,
});

export default reducers;
