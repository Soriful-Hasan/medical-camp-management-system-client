import React from "react";
import { Link, NavLink } from "react-router";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserMd,
  FaUsers,
  FaUserCheck,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { format } from "date-fns";

const CampsCard = ({ camp }) => {
  const {
    _id,
    camp_name,
    camp_img,
    camp_fee,
    camp_description,
    createdAt,
    created_date,
    location,
    participant_count,
    professional_name,
  } = camp;

  const time = format(new Date(createdAt), "h:mm a");

  return (
    <div className="group relative bg-white dark:bg-dark-primary rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700">
      {/* Image Container with Gradient Overlay */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
        <img
          alt={camp_name}
          src={camp_img}
          className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Participant Badge */}
        <div className="absolute top-4 left-4 z-20">
          <div className="bg-my-primary backdrop-blur-sm bg-opacity-90 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold text-white shadow-lg">
            <FaUserCheck className="text-xs" />
            <span>{participant_count} People Joined</span>
          </div>
        </div>

        {/* Price Badge */}
        <div className="absolute top-4 right-4 z-20">
          <div className="bg-gradient-to-r from-green-500 to-green-600 backdrop-blur-sm bg-opacity-90 px-4 py-2 rounded-full text-white font-bold shadow-lg">
            ৳{camp_fee}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-4 left-4 right-4 z-20">
          <h3 className="text-white text-xl font-bold mb-2 line-clamp-2 drop-shadow-lg">
            {camp_name}
          </h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-2">
          {camp_description}
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Date */}
          <div className="flex items-start gap-3 p-3 rounded-xl bg-blue-50 dark:bg-gray-800 border border-blue-100 dark:border-gray-700">
            <div className="p-2 rounded-lg bg-my-primary/10">
              <FaCalendarAlt className="text-my-primary text-sm" />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                Date
              </p>
              <p className="text-sm font-semibold text-gray-800 dark:text-white">
                {created_date}
              </p>
            </div>
          </div>

          {/* Time */}
          <div className="flex items-start gap-3 p-3 rounded-xl bg-purple-50 dark:bg-gray-800 border border-purple-100 dark:border-gray-700">
            <div className="p-2 rounded-lg bg-purple-500/10">
              <FaClock className="text-purple-500 text-sm" />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                Time
              </p>
              <p className="text-sm font-semibold text-gray-800 dark:text-white">
                {time}
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3 p-3 rounded-xl bg-green-50 dark:bg-gray-800 border border-green-100 dark:border-gray-700">
            <div className="p-2 rounded-lg bg-green-500/10">
              <FaMapMarkerAlt className="text-green-500 text-sm" />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                Location
              </p>
              <p className="text-sm font-semibold text-gray-800 dark:text-white line-clamp-1">
                {location}
              </p>
            </div>
          </div>

          {/* Professional */}
          <div className="flex items-start gap-3 p-3 rounded-xl bg-orange-50 dark:bg-gray-800 border border-orange-100 dark:border-gray-700">
            <div className="p-2 rounded-lg bg-orange-500/10">
              <FaUserMd className="text-orange-500 text-sm" />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                Doctor
              </p>
              <p className="text-sm font-semibold text-gray-800 dark:text-white line-clamp-1">
                {professional_name}
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to={`/camp-details/${_id}`}
            className="group/btn w-full inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-my-primary to-blue-600 hover:from-blue-600 hover:to-my-primary text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-my-primary/25 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>View Camp Details</span>
            <FaArrowRight className="text-sm transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-2 -right-2 w-24 h-24 bg-gradient-to-br from-my-primary/10 to-transparent rounded-full blur-xl"></div>
      <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-lg"></div>
    </div>
  );
};

export default CampsCard;
