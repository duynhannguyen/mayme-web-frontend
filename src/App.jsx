import "./index.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import SiteLayout from "./component/Layouts/SiteLayout/SiteLayout";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import SignupPage from "./pages/SignUpPage/SignupPage.jsx";

import MainPage from "./pages/MainPage/MainPage.jsx"; //
import MenuItem from "./pages/MenuItem/MenuItem.jsx";
import Menu from "./pages/Menu/Menu.jsx";

import ProtectedRoute from "./component/ProtectedRoute/ProtectedRoute.jsx";

import { useDispatch } from "react-redux";
import { TOKEN_TYPES } from "./constant/constant";
import AuthApi from "./services/authAPI";
import { login } from "./redux/Auth/authSlice";
import Menu2 from "./pages/Menu2/Menu2";
import Order from "./pages/Order/Order";

function App() {
  const dispatch = useDispatch();

  const fetchCurrentUser = async () => {
    const accessToken = localStorage.getItem(TOKEN_TYPES.ACCESS_TOKEN);
    if (accessToken) {
      try {
        const currentUser = await AuthApi.fetchCurrentUser();
        const currentUserData = currentUser.data;
        const payload = {
          user: currentUserData,
        };
        console.log(currentUserData);
        dispatch(login(payload));
      } catch (error) {
        console.log("fetch-current-user-failed:", error);
      }
    }
  };
  useEffect(() => {
    fetchCurrentUser();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="about" element={<Home />} /> */}
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="mainpage" element={<MainPage />} />
        <Route path="menuitem" element={<MenuItem />} />
        <Route path="menuitem" element={<MenuItem />} />
        <Route path="menu" element={<Menu />} />
        <Route path="menu2" element={<Menu2 />} />
        <Route path="order" element={<Order />} />
      </Routes>
    </Router>
  );
}

export default App;
