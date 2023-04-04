import { useSelector } from "react-redux";
import { selectCurrentToken } from "pages/login/authSlice";
import jwtDecode from "jwt-decode";

interface MyToken {
  UserInfo: { email: string; username: number };
}

const useAuth = () => {
  const token = useSelector(selectCurrentToken);

  if (token) {
    const decoded = jwtDecode<MyToken>(token);
    const { email, username } = decoded.UserInfo;

    return {
      username,
      email,
    };
  }
  return {
    username: "",
    email: "",
  };
};

export default useAuth;
