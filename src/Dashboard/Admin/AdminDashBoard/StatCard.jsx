import React from "react";

const StatCard = ({ title, value, percentage, icon, iconBg, iconColor }) => {
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
          <div className="flex items-center mt-2">
            <span className="text-green-600 text-sm font-medium flex items-center">
              <i className="fas fa-arrow-up mr-1"></i>
              {percentage}%
            </span>
            <span className="text-gray-500 dark:text-white text-sm ml-2">
              vs last month
            </span>
          </div>
        </div>
        <div
          className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center`}
        >
          <i className={`${icon} ${iconColor} text-xl`}></i>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
