import {
  Outlet,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/navBar/NavBar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";

import useAuth from "./hooks/useAuth";
const RouteWrapper = () => {
  const [darkmode, setDarkmode] = useState(
    localStorage.getItem("darkmode") ?? "false",
  );
  localStorage.setItem("darkmode", darkmode);
  const toggleHandler = () => {
    setDarkmode((prev) =>
      prev === "false" ? "true" : "false",
    );
  };
  // useEffect(() => {
  //   localStorage.setItem(
  //     "darkmode",
  //     darkmode.toString(),
  //   );
  // }, [darkmode]);
  const { email } = useAuth();
  if (email) {
    return (
      <Navigate to='/login' replace={true} />
    );
  }

  return (
    <div
      className={`theme-${
        darkmode === "true" ? "dark" : "light"
      }`}
    >
      <NavBar
        toggleHandler={toggleHandler}
        darkmode={darkmode}
      />
      <div style={{ display: "flex" }}>
        <LeftBar />
        <div style={{ flex: 6 }}>
          <Outlet />
        </div>
        <RightBar />
      </div>
    </div>
  );
};

export default RouteWrapper;
