import React from "react";
import { Outlet } from "react-router";
import Logo from "../Components/Logo/Logo";

const Auth = () => {
  return (
    <div className="flex  lg:flex-row flex-row-reverse items-center justify-center  min-h-screen">
      <div className="flex-1 hidden lg:block h-screen place-items-center bg-[#0077b620] dark:bg-dark-secondary ">
        <div className="h-screen w-full ">
          <img
            src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <main className="flex-1  place-items-center">
        <Outlet />
      </main>
    </div>
  );
};

export default Auth;
