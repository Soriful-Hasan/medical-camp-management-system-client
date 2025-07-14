import React from "react";
import Logo from "../Logo/Logo";
import { Link, NavLink } from "react-router";
import useAuth from "../../hooks/useAuth";
import DropDown from "../DropDown/DropDown";
import toast from "react-hot-toast";
import ToggleDarkMode from "../ToggleDarkMode/ToggleDarkMode";

const Navbar = () => {
  const { user, userSignOut } = useAuth();

  const handleSignOut = () => {
    userSignOut()
      .then((result) => {
        toast.success("Sign out successfully");
      })
      .catch((error) => {
        toast.error("Something was wrong");
      });
  };
  const link = [
    <div className="flex gap-4">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-semibold  underline" : "font-semibold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/items"
          className={({ isActive }) =>
            isActive ? "font-semibold  underline" : "font-semibold"
          }
        >
          Items
        </NavLink>
      </li>
    </div>,
  ];
  return (
    <div className="">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <Logo />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end ">
          <div className="flex gap-4">
            <ToggleDarkMode />
            <div className="w-12 rounded-full p-1 cursor-pointer">
              <DropDown user={user} handleSignOut={handleSignOut}></DropDown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
