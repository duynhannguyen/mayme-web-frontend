import "./index.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import SiteLayout from "./component/Layouts/SiteLayout/SiteLayout";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import SignupPage from "./pages/SignUpPage/SignupPage.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx"; //
import MenuItem from "./pages/MenuItem/MenuItem.jsx";

function App() {
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
      </Routes>
    </Router>
  );
}

export default App;
