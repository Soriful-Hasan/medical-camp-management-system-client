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
    <div className="mb-10 mt-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl dark:text-white md:text-4xl font-bold mb-4 bg-gradient-to-r text-black bg-clip-text ">
          Popular Medical Camp
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-600 text-lg dark:text-gray-300">
          We're a dynamic group of individuals who are passionate about what we
          do and dedicated to delivering the best results for our clients.
        </p>
      </div>

      <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {popularCamps?.map((camp, index) => (
          <CampsCard key={index} camp={camp} />
        ))}
      </div>
      <div className="text-center mt-20">
        <div className="  inline-block bg-gradient-to-r  from-indigo-600 to-purple-600 p-px rounded-lg">
          <Link
            to={"/items"}
            className="block bg-white dark:bg-gray-900 hover:bg-gray-50 transition-colors duration-200 rounded-lg px-8 py-4 font-medium text-indigo-600"
          >
            See All Camps <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularMedicalCamps;
