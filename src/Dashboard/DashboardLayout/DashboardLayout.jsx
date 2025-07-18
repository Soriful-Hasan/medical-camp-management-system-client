import React from "react";
import { NavLink, Outlet } from "react-router";
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
const Dashboard = () => {
  const { role, isLoading } = useUserRole();
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
            <svg
              class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 21"
            >
              <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
              <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
            </svg>
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
