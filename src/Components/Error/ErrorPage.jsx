import React from "react";
import { NavLink } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="space-y-6 flex flex-col">
        <h1 className="text-4xl ">404 Page Not found</h1>
        <NavLink className="btn" to={"/"}>
          Back to home
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
