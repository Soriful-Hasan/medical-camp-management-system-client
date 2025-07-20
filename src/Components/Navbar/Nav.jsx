import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import ToggleDarkMode from "../ToggleDarkMode/ToggleDarkMode";
import Logo from "../Logo/Logo";
import { Link, NavLink } from "react-router";
import toast from "react-hot-toast";
import DropDown from "../DropDown/DropDown";

const Nav = () => {
  const { user, userSignOut, loading } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = () => {
    userSignOut()
      .then((result) => {
        toast.success("Sign out successfully");
      })
      .catch((error) => {
        toast.error("Something was wrong");
      });
  };
  return (
    <nav className="fixed top-0 left-0 w-full z-50  bg-my-primary/5 border-gray-200 dark:bg-my-secondary backdrop-blur-sm  ">
      <div className="lg:max-w-10/12  flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />

        {/* Profile Button + Dropdown */}

        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="mr-4">
            <ToggleDarkMode />
          </div>

          {loading ? (
            <>
              <span className="loading loading-ring loading-xl"></span>
            </>
          ) : user ? (
            <>
              <DropDown handleSignOut={handleSignOut} />
            </>
          ) : (
            <>
              <Link
                to={"/auth/login"}
                className="px-4 py-2 rounded-md cursor-pointer bg-my-primary  text-white"
              >
                Log in
              </Link>
            </>
          )}

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4   md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded md:p-0 ${
                    isActive
                      ? " bg-my-primary text-white  md:bg-transparent  md:text-my-primary md:dark:text-blue-500"
                      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/items"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded md:p-0 ${
                    isActive
                      ? "bg-my-primary text-white md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
                  }`
                }
              >
                Camps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded md:p-0 ${
                    isActive
                      ? "bg-my-primary text-white md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
                  }`
                }
              >
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded md:p-0 ${
                    isActive
                      ? "bg-my-primary text-white md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
