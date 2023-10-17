import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to={"/"} />;
  }
  return <Component />;
};

export default ProtectedRoute;
