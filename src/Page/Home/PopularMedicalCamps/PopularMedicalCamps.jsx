import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loader from "../../../Components/Loader/Loader";
import CampsCard from "./CampsCard";

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
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl dark:text-white md:text-4xl font-bold mb-4 bg-gradient-to-r text-black bg-clip-text ">
          Popular Medical Camp
        </h2>
        <div class="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
        <p class="text-gray-600 text-lg dark:text-gray-300">
          We're a dynamic group of individuals who are passionate about what we
          do and dedicated to delivering the best results for our clients.
        </p>
      </div>

      <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {popularCamps?.map((camp, index) => (
          <CampsCard key={index} camp={camp} />
        ))}
      </div>
    </div>
  );
};

export default PopularMedicalCamps;
