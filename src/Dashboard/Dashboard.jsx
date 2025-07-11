import React from "react";
import { NavLink, Outlet } from "react-router";
import Logo from "../Components/Logo/Logo";
import useUseRole from "../hooks/useUseRole";

const Dashboard = () => {
  const { role, isLoading, user } = useUseRole();

  console.log(role, isLoading, user);
  const link = [
    <div className="mt-6 flex flex-col gap-6">
      <li>
        <NavLink>Dash board</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard/registered-camps"}>Registered Camps</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard/payment-history"}>Payment history</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard/add-camp"}>Add Camp</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard/manage-camp"}>Manage Camps</NavLink>
      </li>
      <div className="border-b border-gray-300"></div>
      <li>
        <NavLink to={"/dashboard/profile"}>Profile</NavLink>
      </li>
    </div>,
  ];
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        <div className="navbar bg-base-300 w-full lg:hidden">
          <div className="flex-none ">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2 lg:hidden">Dash Board</div>
        </div>
        {/* Page content here */}
        <Outlet></Outlet>
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <Logo />
          {link}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
