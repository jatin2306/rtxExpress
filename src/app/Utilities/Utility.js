import { useDispatch, useSelector } from "react-redux";

const logoName = "RTO Xpress";
const login = false
const useAppDispatch = () => useDispatch();
const SendOtpReducer = () => useSelector((state) => state?.sendOtpReducer);
const navItems = [
  { label: "Home", link: "/" },
  { label: "Insurance", link: "/Insurance" },
  { label: "EChallan", link: "/EChallan" },
];
const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
};

export { logoName, navItems, login, useAppDispatch, SendOtpReducer, scrollToTop };
