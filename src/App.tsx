import "./style.scss";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import RouteWrapper from "./RouteWrapper";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<RouteWrapper />}>
          <Route path='/' element={<Home />} />
          <Route
            path='/profile/:id'
            element={<Profile />}
          />
        </Route>
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/register'
          element={<Register />}
        />
      </Routes>
    </div>
  );
}

export default App;
