import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loader from "../../../Components/Loader/Loader";
import CampsCard from "./CampsCard";
import { Link } from "react-router";

const PopularMedicalCamps = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: popularCamps = [],
    isPending,
    error,
  } = useQuery({
    queryKey: ["popularCamps"],
    queryFn: async () => {
      const popularCamps = await axiosSecure.get("/popular-camps");
      return popularCamps.data;
    },
  });
  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="mb-16 mt-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section with Enhanced Design */}
      <div className="text-center max-w-4xl mx-auto mb-16 relative">
        {/* Background decoration */}
        <div className="inline-block mb-6">
          <span className="text-sm font-semibold px-4 py-2 rounded-full text-white tracking-wider uppercase bg-[#01A6E7]">
            Healthcare Services
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Popular
          <span className="block text-4xl md:text-6xl bg-gradient-to-r from-[#01A6E7] to-[#0291CC] bg-clip-text text-transparent font-extrabold">
            Medical Camps
          </span>
        </h2>

        <div className="flex items-center justify-center mb-8">
          <div className="h-1 w-16 rounded-full bg-[#01A6E7]"></div>
          <div className="w-3 h-3 rounded-full mx-4 bg-[#01A6E7]"></div>
          <div className="h-1 w-16 rounded-full bg-[#01A6E7]"></div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Discover our most sought-after medical camps providing
          <span className="font-semibold text-[#01A6E7]">
            {" "}
            quality healthcare{" "}
          </span>
          to communities across the region with
          <span className="font-semibold text-[#01A6E7]">
            {" "}
            expert medical professionals
          </span>
          .
        </p>
      </div>

      {/* No Results Found */}
      {popularCamps?.length === 0 && (
        <div className="flex flex-col justify-center items-center py-16">
          <div className="relative">
            <img
              src="not_found.svg"
              width={350}
              alt="No camps found"
              className="opacity-80"
            />
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 rounded-full opacity-20 blur-sm bg-[#01A6E7]"></div>
          </div>
          <div className="text-center mt-8">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              No Popular Camps Available
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Check back soon for upcoming medical camps in your area.
            </p>
          </div>
        </div>
      )}

      {/* Cards Grid with Enhanced Layout */}
      {popularCamps?.length > 0 && (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 mb-16">
          {popularCamps?.map((camp, index) => (
            <div key={index} className="">
              <CampsCard camp={camp} />
            </div>
          ))}
        </div>
      )}

      {/* Enhanced Call-to-Action Button */}
      {popularCamps?.length > 0 && (
        <div className="text-center mt-20">
          <div className="relative inline-block group">
            {/* Main button */}
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to={"/items"}
              className="relative block bg-white dark:bg-[#1e2939] border-2 border-[#01A6E7] text-[#01A6E7] rounded-xl px-10 py-4 font-semibold text-lg transition-all duration-300 group-hover:transform group-hover:-translate-y-1 group-hover:shadow-xl hover:bg-[#01A6E7] hover:text-white"
            >
              <span className="flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-3 transition-transform group-hover:rotate-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0l-4-4m4 4l-4 4"
                  ></path>
                </svg>
                Explore All Medical Camps
                <svg
                  className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5-5 5M6 12h12"
                  ></path>
                </svg>
              </span>
            </Link>
          </div>

          {/* Additional info below button */}
          <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full mr-2 bg-[#01A6E7]"></div>
              <span>Expert Doctors</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full mr-2 bg-[#01A6E7]"></div>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full mr-2 bg-[#01A6E7]"></div>
              <span>Community Care</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopularMedicalCamps;
