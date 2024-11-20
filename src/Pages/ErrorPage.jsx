import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center space-y-6 p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-9xl font-extrabold text-red-500">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600">
          The page you're looking for doesn't exist or an error occurred.
        </p>
        <Link
          to="/"
          className="btn bg-gradient-to-tr from-[#901111] to-[#007aff] text-white "
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
