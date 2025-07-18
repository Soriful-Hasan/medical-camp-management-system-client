import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const AnalyticsCard = ({ title, value, icon, iconBg, iconColor }) => {
  console.log(icon);
  return (
    <div className="bg-white dark:bg-dark-secondary rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            {title}
          </p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
            {value}
          </p>
        </div>
        <div
          className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center`}
        >
          <FontAwesomeIcon icon={faUsers} color={iconColor} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
