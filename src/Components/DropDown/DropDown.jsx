import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";
import { RiDashboardFill } from "react-icons/ri";
const DropDown = ({ handleSignOut }) => {
  const { user, loading } = useAuth();

  return (
    <Menu as="div" className="relative inline-block text-left">
      {/* Avatar acts as dropdown button */}
      <MenuButton className="focus:outline-none">
        <div className="avatar cursor-pointer">
          <div className="w-8 rounded-full  border">
            <img src={user?.photoURL} alt="" />
          </div>
        </div>
      </MenuButton>

      {/* Dropdown Items */}
      <MenuItems className="absolute right-0 mt-2  origin-top-right rounded-md bg-white dark:bg-dark-primary dark:text-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50 text-sm text-gray-700">
        <div className="py-1 my-4">
          <MenuItem className="px-4 ">
            <p>{user?.displayName}</p>
          </MenuItem>
          <MenuItem className="px-4 mt-2">
            <p>{user?.email}</p>
          </MenuItem>

          <div className="border-t border-gray-100 mt-2"></div>

          <MenuItem>
            {({ active }) => (
              <Link
                to={"dashboard"}
                className={`cursor-pointer gap-2 font-semibold${
                  active ? "bg-gray-100" : ""
                } group flex items-center w-full px-4 py-2`}
              >
                <RiDashboardFill /> DashBoard
              </Link>
            )}
          </MenuItem>

          {user ? (
            <MenuItem>
              {({ active }) => (
                <button
                  onClick={handleSignOut}
                  className={`cursor-pointer  font-semibold${
                    active ? "bg-gray-100" : ""
                  } group flex items-center w-full px-4 py-2`}
                >
                  <ArrowRightOnRectangleIcon className="w-4 h-4 mr-2" />
                  Logout
                </button>
              )}
            </MenuItem>
          ) : (
            <MenuItem>
              {({ active }) => (
                <Link
                  to={"/auth/login"}
                  className={`${
                    active ? "bg-gray-100" : ""
                  } group flex items-center w-full px-4 py-2`}
                >
                  Login
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
