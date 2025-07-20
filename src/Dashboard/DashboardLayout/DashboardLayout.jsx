import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router";
import Logo from "../../Components/Logo/Logo";
import useUserRole from "../../hooks/useUserRole";
import {
  FaHome,
  FaUserShield,
  FaClipboardList,
  FaMoneyCheckAlt,
  FaPlus,
  FaUserCircle,
  FaTasks,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import Loader from "../../components/Loader/Loader";
const Dashboard = () => {
  const { role, isLoading } = useUserRole();
  const { state } = useNavigate();

  if (isLoading) {
    return <Loader />;
  }
  const linkClass =
    "flex items-center gap-2 px-4 py-2 rounded-md font-medium hover:bg-my-primary hover:text-white dark:hover:bg-gray-700 transition-all duration-200";
  const activeClass = "bg-my-primary text-white ";
  const link = [
    <nav className="mt-6">
      <ul className="flex flex-col gap-6">
        <li>
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `${linkClass} ${
                isActive ? activeClass : "text-gray-800 dark:text-white"
              }`
            }
          >
            <MdDashboard />
            Dashboard
          </NavLink>
        </li>

        {role === "participant" && (
          <>
            <li>
              <NavLink
                to="/dashboard/registered-camps"
                className={({ isActive }) =>
                  `${linkClass} ${
                    isActive ? activeClass : "text-gray-800 dark:text-white"
                  }`
                }
              >
                <FaClipboardList />
                Registered Camps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/payment-history"
                className={({ isActive }) =>
                  `${linkClass} ${
                    isActive ? activeClass : "text-gray-800 dark:text-white"
                  }`
                }
              >
                <FaMoneyCheckAlt />
                Payment History
              </NavLink>
            </li>
          </>
        )}

        {role === "admin" && (
          <>
            <li>
              <NavLink
                to="/dashboard/add-camp"
                className={({ isActive }) =>
                  `${linkClass} ${
                    isActive ? activeClass : "text-gray-800 dark:text-white"
                  }`
                }
              >
                <FaPlus />
                Add Camp
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/manage-camp"
                className={({ isActive }) =>
                  `${linkClass} ${
                    isActive ? activeClass : "text-gray-800 dark:text-white"
                  }`
                }
              >
                <FaTasks />
                Manage Camps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/manage-registered-camp"
                className={({ isActive }) =>
                  `${linkClass} ${
                    isActive ? activeClass : "text-gray-800 dark:text-white"
                  }`
                }
              >
                <FaClipboardList />
                Manage Registered Camp
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink
            to="profile"
            className={({ isActive }) =>
              `${linkClass} ${
                isActive ? activeClass : "text-gray-800 dark:text-white"
              }`
            }
          >
            <FaUserCircle />
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>,
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
        {state == "loading" ? <Loader></Loader> : <Outlet></Outlet>}
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
