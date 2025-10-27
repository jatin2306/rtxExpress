import { useDispatch, useSelector } from "react-redux";

const logoName = "RTO Xpress";
const login =false
const useAppDispatch = () => useDispatch();
const SendOtpReducer = () => useSelector((state) => state?.sendOtpReducer);
const navItems = [
  { label: "Home", link: "/" },
  { label: "Insurance", link: "/Insurance" },
  { label: "EChallan", link: "/EChallan" },
];
export { logoName, navItems, login, useAppDispatch, SendOtpReducer };
