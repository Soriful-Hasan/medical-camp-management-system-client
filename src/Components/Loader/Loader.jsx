import React, { useState, useEffect } from "react";
import {
  FaUserMd,
  FaHeartbeat,
  FaStethoscope,
  FaHospital,
  FaAmbulance,
  FaMedkit,
} from "react-icons/fa";

const MedicalCampLoader = () => {
  const [loadingText, setLoadingText] = useState("Preparing Medical Camp...");
  const [progress, setProgress] = useState(0);

  const loadingSteps = [
    "Preparing Medical Camp...",
    "Setting up Healthcare Facilities...",
    "Connecting with Medical Professionals...",
    "Loading Patient Management System...",
    "Finalizing Camp Details...",
    "Almost Ready!",
  ];

  useEffect(() => {
    let stepIndex = 0;
    let progressValue = 0;

    const interval = setInterval(() => {
      if (stepIndex < loadingSteps.length) {
        setLoadingText(loadingSteps[stepIndex]);
        stepIndex++;
        progressValue += 16.67; // 100/6 steps
        setProgress(Math.min(progressValue, 100));
      } else {
        clearInterval(interval);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Background Medical Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl text-blue-400">
          <FaStethoscope />
        </div>
        <div className="absolute top-20 right-20 text-4xl text-green-400">
          <FaHeartbeat />
        </div>
        <div className="absolute bottom-20 left-20 text-5xl text-red-400">
          <FaMedkit />
        </div>
        <div className="absolute bottom-10 right-10 text-7xl text-indigo-400">
          <FaHospital />
        </div>
      </div>

      {/* Main Loader Container */}
      <div className="relative flex flex-col items-center space-y-8 max-w-md mx-auto px-6">
        {/* Medical Cross Animation */}
        <div className="relative">
          {/* Rotating Ring */}
          <div className="w-32 h-32 border-4 border-blue-200 dark:border-gray-600 rounded-full animate-spin relative">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg"></div>
            </div>
            <div className="absolute top-1/2 -right-2 transform -translate-y-1/2">
              <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg"></div>
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="w-4 h-4 bg-gradient-to-r from-red-500 to-red-600 rounded-full shadow-lg"></div>
            </div>
            <div className="absolute top-1/2 -left-2 transform -translate-y-1/2">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full shadow-lg"></div>
            </div>
          </div>

          {/* Medical Cross Center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Cross Background */}
              <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center border-2 border-blue-100 dark:border-gray-600">
                {/* Vertical Bar */}
                <div className="absolute w-3 h-12 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                {/* Horizontal Bar */}
                <div className="absolute w-12 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </div>
              {/* Pulsing Effect */}
              <div className="absolute inset-0 w-16 h-16 bg-blue-400 rounded-xl animate-ping opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Medical Icons Animation */}
        <div className="flex justify-center space-x-6">
          <div
            className="flex flex-col items-center space-y-2 animate-bounce"
            style={{ animationDelay: "0ms" }}
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <FaUserMd className="text-blue-600 text-xl" />
            </div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          </div>

          <div
            className="flex flex-col items-center space-y-2 animate-bounce"
            style={{ animationDelay: "200ms" }}
          >
            <div className="w-12 h-12 bg-green-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <FaHeartbeat className="text-green-600 text-xl" />
            </div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>

          <div
            className="flex flex-col items-center space-y-2 animate-bounce"
            style={{ animationDelay: "400ms" }}
          >
            <div className="w-12 h-12 bg-red-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <FaStethoscope className="text-red-600 text-xl" />
            </div>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Brand Title */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              MediCamp
            </span>
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            Medical Management Platform
          </p>
        </div>

        {/* Dynamic Loading Text */}
        <div className="text-center space-y-4">
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 animate-pulse">
            {loadingText}
          </p>

          {/* Progress Bar */}
          <div className="w-80 max-w-full mx-auto">
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
              <span>Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-500 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Medical Elements */}
        <div className="absolute top-0 left-0 w-4 h-4 text-blue-400 opacity-60 animate-float">
          <FaAmbulance />
        </div>
        <div className="absolute top-10 right-0 w-3 h-3 text-green-400 opacity-40 animate-float-delayed">
          <FaMedkit />
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.8;
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-15px) rotate(-180deg);
            opacity: 0.7;
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite 2s;
        }
      `}</style>
    </div>
  );
};

// Compact Medical Loader for Components
export const CompactMedicalLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <div className="relative">
        {/* Spinning Stethoscope */}
        <div className="w-16 h-16 border-4 border-blue-200 dark:border-gray-600 border-t-blue-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <FaStethoscope className="text-blue-500 text-lg animate-pulse" />
        </div>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 animate-pulse">
        Loading medical data...
      </p>
    </div>
  );
};

// Button Loader for Medical Actions
export const MedicalButtonLoader = ({ text = "Processing..." }) => {
  return (
    <div className="inline-flex items-center">
      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
      <FaHeartbeat className="text-white mr-2 animate-pulse" />
      <span>{text}</span>
    </div>
  );
};

export default MedicalCampLoader;
