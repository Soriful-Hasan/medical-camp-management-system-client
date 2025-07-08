import React from "react";
import { Outlet } from "react-router";
import Logo from "../Components/Logo/Logo";

const Auth = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center  min-h-screen">
      <div className="flex-1  place-items-center">
        <Logo />
      </div>
      <main className="flex-1  place-items-center">
        <Outlet />
      </main>
    </div>
  );
};

export default Auth;
