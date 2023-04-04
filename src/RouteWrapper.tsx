import {
  Outlet,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";

import "./RouteWrapper.scss";
import useAuth from "./hooks/useAuth";
const RouteWrapper = () => {
  const { email } = useAuth();
  if (!email) {
    return (
      <Navigate to='/login' replace={true} />
    );
  }
  return (
    <>
      <NavBar />
      <div className='wrapper'>
        <LeftBar />
        <Outlet />
        <RightBar />
      </div>
    </>
  );
};

export default RouteWrapper;
