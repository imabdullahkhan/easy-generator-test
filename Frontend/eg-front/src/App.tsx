import React, { lazy, useContext } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/auth/auth.provider";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { AuthContext } from "./context/auth/auth.context";
// import Signup from "./pages/Signup";

const Login = lazy(() => import('./pages/Login'))
const Signup = lazy(() => import('./pages/Signup'))
const Home = lazy(() => import('./pages/Home'))

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/login" element={<Login />} />{" "}
          <Route path="/signup" element={<Signup />} />{" "}
          <Route path="/" element={<ProtectedRoute component={Home} />} />
          {/* 👈 Renders at /app/ */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
