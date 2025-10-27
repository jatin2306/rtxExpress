import { createSlice } from "@reduxjs/toolkit";

export const sendOtpSlice = createSlice({
  name: "send-otp",
  initialState: {
    sendOtpData: [],
    message: "",
  },
  reducers: {
    onPostSendOtp: (state) => {
      return {
        ...state,
        isLoading: true,
        SendOtpData: [],
      };
    },

    onPostSendOtpSuccess: (state, { payload }) => {
      const { postData = [], message = "", status_code = "200" } = payload;
      return {
        ...state,
        isLoading: false,
        SendOtpData: postData,
        postMessage: message,
        post_status_code: status_code,
      };
    },

    onPostSendOtpError: (state, { payload }) => {
      const { postData = [], message = "", status_code = 400 } = payload;
      return {
        ...state,
        SendOtpData: postData,
        postMessage: message,
        post_status_code: status_code,
        isLoading: false,
      };
    },
    onPostSendOtpReset: (state) => {
      return {
        ...state,
        SendOtpData: [],
        postMessage: "",
        post_status_code: null,
      };
    },
  },
});

export const {
  onPostSendOtp,
  onPostSendOtpSuccess,
  onPostSendOtpError,
  onPostSendOtpReset,
} = sendOtpSlice.actions;

export default sendOtpSlice.reducer;
