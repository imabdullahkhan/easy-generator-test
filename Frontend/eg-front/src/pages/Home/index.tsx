import React, { useContext } from "react";
import { AuthContext } from "../../context/auth/auth.context";
import { logout } from "../../context/auth/auth.action";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate()

  const logoutUser = () => {
    dispatch(logout());
    navigate('/login')
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
            Welcome to the application.
          </h2>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            AI-powered e-learning creation tool for enterprises
          </p>
          <button
            onClick={logoutUser}
            className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          >
            Logout
          </button>
        </div>
      </div>
    </section>
  );
}
