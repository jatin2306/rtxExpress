import { createSlice } from "@reduxjs/toolkit";

export const sendOtpSlice = createSlice({
  name: "send-otp",
  initialState: {
    isLoading: false,
    sendOtpData: [],
    message: "",
  },
  reducers: {
    onPostSendOtp: (state) => {
      return {
        ...state,
        isPostLoading: true,
        SendOtpData: [],
      };
    },

    onPostSendOtpSuccess: (state, { payload }) => {
      const { postData = [], message = "", status_code="200" } = payload;
      return {
        ...state,
        isPostLoading: false,
        SendOtpData: postData,
        postMessage:message,
        post_status_code:status_code,
      };
    },

    onPostSendOtpError: (state, { payload }) => {
      const { postData = [], message = "", status_code = 400 } = payload;
      return {
        ...state,
        SendOtpData: postData,
        postMessage:message,
        post_status_code:status_code,
        isPostLoading: false,
      };
    },
    onPostSendOtpReset: (state) => {
      return {
        ...state,
        SendOtpData: [],
        postMessage:"",
        post_status_code:null
      };
    },
  }
});

export const {
  onPostSendOtp,
  onPostSendOtpSuccess,
  onPostSendOtpError,
  onPostSendOtpReset
} = sendOtpSlice.actions;

export default sendOtpSlice.reducer;
