import React from "react";
import { Link, NavLink } from "react-router";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserMd,
  FaUsers,
} from "react-icons/fa";
const CampsCard = ({ camp }) => {
  const {
    _id,
    camp_name,
    camp_img,
    camp_description,
    createdAt,
    created_date,
    location,
    participant_count,
    professional_name,
  } = camp;
  return (
    <div>
      <div className="max-w-sm h-122 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg w-full h-48 object-cover"
          src={camp_img}
          alt={camp_name}
        />
        <div className="p-5 space-y-3">
          <h5 className="text-2xl line-clamp-1 font-bold tracking-tight text-gray-900 dark:text-white">
            {camp_name}
          </h5>

          <p className="text-gray-700 line-clamp-2 dark:text-gray-400 text-sm">
            {camp_description}
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
            <FaCalendarAlt className="text-blue-500" /> {created_date}
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
            <FaMapMarkerAlt className="" /> {location}
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
            <FaUserMd className="" /> {professional_name}
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
            <FaUsers className="" /> {participant_count} participants
          </p>

          {/* Button */}
          <NavLink
            to={`/camp-details/${_id}`}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-my-primary rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            Details
            <svg
              className="w-4 h-4 ml-2 rtl:rotate-180"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CampsCard;
