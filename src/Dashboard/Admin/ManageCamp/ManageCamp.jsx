import React from "react";
import ManageCampTable from "./ManageCampTable";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQueries, useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader/Loader";
import useAuth from "../../../hooks/useAuth";

const ManageCamp = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: campsData,
    isPending,
    error,
  } = useQuery({
    queryKey: ["manageCamps"],
    queryFn: async () => {
      const camps = await axiosSecure.get(
        `/admin/get-camps?email=${user?.email}`
      );
      return camps.data;
    },
  });

  if (isPending) {
    return <Loader />;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Date</th>
              <th>Location</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          {campsData?.map((camp, index) => (
            <ManageCampTable
              key={index}
              index={index}
              camp={camp}
            ></ManageCampTable>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ManageCamp;
