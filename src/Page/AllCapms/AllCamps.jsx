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
    <div className="w-11/12 mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">All Camps</h1>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {allCamps?.map((camp, index) => (
          <CampsCard key={index} camp={camp} />
        ))}
      </div>
    </div>
  );
};

export default AllCamps;
