import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router";
const DropDown = ({ user, handleSignOut }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {/* Avatar acts as dropdown button */}
      <MenuButton className="focus:outline-none">
        <div className="avatar cursor-pointer">
          <div className="w-8 rounded-full ring  ring-offset-base-100 ring-offset-2">
            <img src={user?.photoURL} alt="User Avatar" />
          </div>
        </div>
      </MenuButton>

      {/* Dropdown Items */}
      <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50 text-sm text-gray-700">
        <div className="py-1">
          <div className="p-4">
            <h1>{user?.displayName}</h1>
            <div className="border-b mt-2 border-gray-200"></div>
          </div>

          <MenuItem>
            {({ active }) => (
              <Link
                to={"dashboard/add-camp"}
                className={`${
                  active ? "bg-gray-100" : ""
                } group flex items-center w-full px-4 py-2`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                  />
                </svg>
                DashBoard
              </Link>
            )}
          </MenuItem>

          {user ? (
            <>
              {" "}
              <MenuItem>
                {({ active }) => (
                  <button
                    onClick={handleSignOut}
                    className={`${
                      active ? "bg-gray-100" : ""
                    } group flex items-center w-full px-4 py-2`}
                  >
                    <ArrowRightOnRectangleIcon className="w-4 h-4 mr-2" />
                    Logout
                  </button>
                )}
              </MenuItem>
            </>
          ) : (
            <>
              {" "}
              <MenuItem>
                {({ active }) => (
                  <Link
                    to={"/auth/login"}
                    className={`${
                      active ? "bg-gray-100" : ""
                    } group flex items-center w-full px-4 py-2`}
                  >
                    <ArrowRightOnRectangleIcon className="w-4 h-4 mr-2" />
                    Login
                  </Link>
                )}
              </MenuItem>
            </>
          )}
        </div>
      </MenuItems>
    </Menu>
  );
};

export default DropDown;
