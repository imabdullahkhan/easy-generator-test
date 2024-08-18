import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/auth/auth.context";

interface ProtectedRouteProps {
  component: React.ComponentType<any>;
  path?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  path,
}) => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { state } = authContext;
  const isAuthenticated =
    state.isAuthenticated || Boolean(localStorage.getItem("user"));

  return isAuthenticated ? <Component /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
