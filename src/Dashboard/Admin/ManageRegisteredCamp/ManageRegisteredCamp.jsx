import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Loader from "../../../Components/Loader/Loader";
import RegisteredCampTable from "./RegisteredCampTable";

const ManageRegisteredCamp = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    data: registeredCampsData,
    isPending,
    error,
  } = useQuery({
    queryKey: ["manageCampData", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/admin/get-registered-camps?email${user?.email}`
      );
      return res.data;
    },
  });
  if (isPending) {
    <Loader />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Camp Name</th>
            <th>Payment Status</th>
            <th>Confirm Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {registeredCampsData?.map((regData, index) => (
          <RegisteredCampTable key={index} regData={regData} index={index} />
        ))}
      </table>
    </div>
  );
};

export default ManageRegisteredCamp;
