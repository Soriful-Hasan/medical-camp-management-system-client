import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Components/Loader/Loader";
import CampsCard from "../Home/PopularMedicalCamps/CampsCard";

const AllCamps = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: allCamps,
    isPending,
    error,
  } = useQuery({
    queryKey: ["AllCamps"],
    queryFn: async () => {
      const popularCamps = await axiosSecure.get("/popular-camps");
      return popularCamps.data;
    },
  });
  if (isPending) {
    return <Loader />;
  }
  return (
    <div className="w-10/12 mx-auto ">
      <div className="">
        <div className="text-center max-w-3xl mx-auto mb-16 mt-16">
          <h2 className="text-3xl dark:text-white md:text-4xl font-bold mb-4 bg-gradient-to-r text-black bg-clip-text ">
            All Medical Camps
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg dark:text-gray-300">
            We're a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {allCamps?.map((camp, index) => (
            <CampsCard key={index} camp={camp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCamps;
