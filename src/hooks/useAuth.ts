import { useSelector } from "react-redux";
import { selectCurrentToken } from "../pages/login/authSlice";
import jwtDecode from "jwt-decode";

interface MyToken {
  UserInfo: {
    email: string;
    username: number;
    id: number;
    profilePic: string;
  };
}

const useAuth = () => {
  const token = useSelector(selectCurrentToken);

  if (token) {
    const decoded = jwtDecode<MyToken>(token);
    const { email, username, profilePic, id } =
      decoded.UserInfo;

    return {
      username,
      email,
      profilePic,
    };
  }
  return {
    username: "Shanu Singh",
    email: "",
    id: 1,
    profilePic:
      "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
  };
};

export default useAuth;
