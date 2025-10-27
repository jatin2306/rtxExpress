import { all } from "redux-saga/effects";
import sendOtpSaga from "./sendOtpSaga";
export default function* rootSaga() {
  yield all([sendOtpSaga()]);
}
