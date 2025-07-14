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
    <div className="mb-10 max-w-10/12 mx-auto">
      <div className="mb-10 mt-10 text-center space-y-2">
        <h1 className=" text-3xl md:text-4xl font-bold">Popular Camps</h1>
        <p className="text-gray-500 text-center max-w-xl mx-auto mb-6">
          Discover our most attended and highly rated health camps across
          Bangladesh.
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
