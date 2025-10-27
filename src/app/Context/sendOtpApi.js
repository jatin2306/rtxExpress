import AxiosInstance from "../Components/Common/Axios/AxiosInstance";
import API from "../Components/Common/Endpoint/serviceConstant";

export const callSendOtpApi = async (payload) => {
  
  const { data = [] } = await AxiosInstance.post(API.send_otp, payload);
  return data;
};
