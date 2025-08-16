import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loader from "../../../Components/Loader/Loader";
import CampJoinModal from "../../AllCapms/CampJoinModal";
import useIsJoined from "../../../hooks/useIsJoined";
import toast from "react-hot-toast";
import {
  FaUserCheck,
  FaUserMd,
  FaClock,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";
import Modal from "../../AllCapms/CampJoinModal";
import { ImLocation } from "react-icons/im";
import { TbCoinTakaFilled } from "react-icons/tb";
import { format } from "date-fns";

const CampDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);

  const {
    data: campDetails,
    isPending,
    error,
    refetch,
  } = useQuery({
    queryKey: ["details", id],
    queryFn: async () => {
      const res = await axiosSecure(`/user/camp-details/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["details", campDetails._id] });
    },
  });

  const { alreadyJoined, isLoading } = useIsJoined(id);

  if (isPending) {
    return <Loader />;
  }

  const time = format(new Date(campDetails?.createdAt), "h:mm a");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden mb-8">
          <div className="relative">
            {/* Image with gradient overlay */}
            <div className="relative h-80 sm:h-96">
              <img
                className="w-full h-full object-cover"
                src={campDetails?.camp_img}
                alt={campDetails?.camp_name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Participant badge */}
              <div className="absolute top-6 left-6">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold text-gray-800 ">
                  <FaUserCheck className="text-green-500" />
                  <span>{campDetails?.participant_count} People Joined</span>
                </div>
              </div>

              {/* Price badge */}
              <div className="absolute top-6 right-6">
                <div className="bg-my-primary backdrop-blur-sm bg-opacity-90 px-4 py-2 rounded-full text-white font-bold ">
                  ৳{campDetails?.camp_fee}
                </div>
              </div>
            </div>

            {/* Content overlay on image */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h1 className="text-3xl sm:text-4xl font-bold mb-2 drop-shadow-lg">
                {campDetails?.camp_name}
              </h1>
              <p className="text-lg opacity-90 drop-shadow max-w-2xl">
                {campDetails?.camp_description}
              </p>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Created Date */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                  <FaCalendarAlt className="text-my-primary text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    Create Date
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    When this camp was created
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg text-gray-800 dark:text-white">
                  {campDetails?.created_date}
                </p>
              </div>
            </div>
          </div>

          {/* Created Time */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                  <FaClock className="text-purple-500 text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    Create Time
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Time of creation
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg text-gray-800 dark:text-white">
                  {time}
                </p>
              </div>
            </div>
          </div>

          {/* Professional Name */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm  border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                  <FaUserMd className="text-green-500 text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    Professional Name
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Lead medical professional
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg text-gray-800 dark:text-white">
                  {campDetails?.professional_name}
                </p>
              </div>
            </div>
          </div>

          {/* Camp Fees */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm  border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center">
                  <TbCoinTakaFilled className="text-yellow-500 text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    Camp Fees
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Registration cost
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-xl text-green-600 dark:text-green-400">
                  ৳{campDetails?.camp_fee}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Location - Full width */}
        <div className="bg-white shadow-sm dark:bg-gray-800 rounded-2xl p-6  border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center">
                <FaMapMarkerAlt className="text-red-500 text-lg" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  Location
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Camp venue address
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-lg text-gray-800 dark:text-white">
                {campDetails?.location}
              </p>
            </div>
          </div>
        </div>

        {/* Join Button */}
        <div className="text-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`
              w-full sm:w-auto cursor-pointer  px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 transform hover:scale-105 
              ${
                alreadyJoined
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-gradient-to-r from-my-primary to-blue-600  text-white hover:shadow-xl active:scale-95"
              }
            `}
            disabled={alreadyJoined || isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Checking...</span>
              </div>
            ) : alreadyJoined ? (
              <div className="flex items-center justify-center gap-2">
                <FaUserCheck />
                <span>Already Joined</span>
              </div>
            ) : (
              <div className="flex items-center cursor-pointer  justify-center gap-2">
                <span>Join This Camp</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            )}
          </button>
        </div>

        {/* Modal */}
        <Modal
          isOpen={isOpen}
          refetch={refetch}
          setIsOpen={setIsOpen}
          campDetails={campDetails}
        />
      </div>
    </div>
  );
};

export default CampDetails;
