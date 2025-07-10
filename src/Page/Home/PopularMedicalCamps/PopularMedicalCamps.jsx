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
    <div className="w-11/12 mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Popular Camps</h1>
      </div>
      <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {popularCamps?.map((camp, index) => (
          <CampsCard key={index} camp={camp} />
        ))}
      </div>
    </div>
  );
};

export default PopularMedicalCamps;
