import React from "react";
import useAuth from "../../../hooks/useAuth";
import { FaPen } from "react-icons/fa";
import useUserRole from "../../../hooks/useUserRole";
const AdminProfile = () => {
  const { user } = useAuth();
  const { role, roleLoading } = useUserRole();
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-full  md:w-lg mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
        <div className="relative w-32 h-32 mx-auto">
          <img
            className="w-32 h-32 object-cover rounded-full border-4 border-blue-500"
            src={user?.photoURL || "https://i.ibb.co/YcYg2W8/default-user.jpg"}
            alt="User"
          />
          <button
            className="absolute bottom-2 right-2 bg-white dark:bg-gray-700 p-1 rounded-full shadow hover:bg-gray-100"
            title="Edit Profile Picture"
          >
            <FaPen className="text-blue-600 text-xs" />
          </button>
        </div>

        <div className="mt-6 text-center space-y-2">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {user?.displayName || "John Doe"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {user?.email || "john@example.com"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium">Role:</span> {role}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium">Profile Created:</span>{" "}
            {new Date(user?.createdAt || Date.now()).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
