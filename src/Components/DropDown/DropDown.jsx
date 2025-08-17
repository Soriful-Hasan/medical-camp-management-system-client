import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ArrowRightOnRectangleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";
import { RiDashboardFill } from "react-icons/ri";

const DropDown = ({ handleSignOut }) => {
  const { user, loading } = useAuth();

  return (
    <Menu as="div" className="relative cursor-pointer inline-block text-left">
      {/* Avatar acts as dropdown button */}
      <MenuButton className="focus:outline-none group">
        <div className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
          <div className="avatar cursor-pointer">
            <div className="w-10 h-10 rounded-full border-2 border-gray-200 dark:border-gray-600 ring-2 ring-transparent group-hover:ring-blue-500/20 transition-all duration-200">
              <img
                src={user?.photoURL}
                alt={user?.displayName || "User"}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          <ChevronDownIcon className="w-4 h-4 text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-200 transition-colors duration-200" />
        </div>
      </MenuButton>

      {/* Dropdown Items */}
      <MenuItems className="absolute right-0 mt-3 w-72 origin-top-right rounded-xl bg-white dark:bg-gray-900 shadow-xl ring-1 ring-black/5 dark:ring-white/10 focus:outline-none z-50 backdrop-blur-sm">
        {/* User Info Section */}
        <div className="px-4 py-4 border-b border-gray-100 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full border-2 border-gray-200 dark:border-gray-600">
              <img
                src={user?.photoURL}
                alt={user?.displayName || "User"}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                {user?.displayName || "User"}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                {user?.email}
              </p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="py-2">
          <MenuItem>
            {({ focus }) => (
              <Link
                to="dashboard"
                className={`${
                  focus
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300"
                    : "text-gray-700 dark:text-gray-300"
                } group flex items-center w-full px-4 py-3 text-sm font-medium transition-colors duration-150 hover:bg-gray-50 dark:hover:bg-gray-800`}
              >
                <RiDashboardFill className="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-500 transition-colors duration-150" />
                Dashboard
              </Link>
            )}
          </MenuItem>

          {user ? (
            <MenuItem>
              {({ focus }) => (
                <button
                  onClick={handleSignOut}
                  className={`${
                    focus
                      ? "bg-red-50 cursor-pointer dark:bg-red-900/20 text-red-700 dark:text-red-300"
                      : "text-gray-700 dark:text-gray-300"
                  } group flex items-center w-full px-4 py-3 text-sm font-medium transition-colors duration-150 hover:bg-gray-50 dark:hover:bg-gray-800`}
                >
                  <ArrowRightOnRectangleIcon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-red-500 transition-colors duration-150" />
                  Sign Out
                </button>
              )}
            </MenuItem>
          ) : (
            <MenuItem>
              {({ focus }) => (
                <Link
                  to="/auth/login"
                  className={`${
                    focus
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300"
                      : "text-gray-700 dark:text-gray-300"
                  } group flex items-center w-full px-4 py-3 text-sm font-medium transition-colors duration-150 hover:bg-gray-50 dark:hover:bg-gray-800`}
                >
                  <ArrowRightOnRectangleIcon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-500 transition-colors duration-150" />
                  Sign In
                </Link>
              )}
            </MenuItem>
          )}
        </div>
      </MenuItems>
    </Menu>
  );
};

export default DropDown;
