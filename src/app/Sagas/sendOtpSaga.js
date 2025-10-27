import { call, put, takeLatest } from "redux-saga/effects";
import {
  onPostSendOtp,
  onPostSendOtpError,
  onPostSendOtpSuccess,
} from "../Store/Slices/sendOtpSlice";
import { callSendOtpApi } from "../Context/sendOtpApi";

function* SendOtp({ payload }) {
  try {
    const sendOtpResponse = yield call(callSendOtpApi, payload);
    if (sendOtpResponse.httpStatusCode === "200") {
  
      yield put(
        onPostSendOtpSuccess({
          postData: sendOtpResponse.data,
          message: sendOtpResponse.message,
          status_code: sendOtpResponse.httpStatusCode,
        })
      );
    } else {
      yield put(
        onPostSendOtpError({
          data: sendOtpResponse.response,
          message: sendOtpResponse.errorMessage,
        })
      );
    }
  } catch (error) {
    yield put(
      onPostSendOtpError({
        data: {},
        message: error?.response?.data?.ErrorMessage,
        status_code: error?.response?.data?.HttpStatusCode,
      })
    );
  }
}

export default function* sendOTpSaga() {
  yield takeLatest(onPostSendOtp.type, SendOtp);
}
