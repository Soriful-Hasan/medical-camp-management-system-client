import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loader from "../../../Components/Loader/Loader";
import RegisteredTable from "./RegisteredTable";

const RegisteredCamps = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const email = user?.email;
  const {
    data: campsData = [],
    isPending,
    error,
  } = useQuery({
    queryKey: ["registeredCamps", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/registeredCamps?email=${email}`);
      return res.data;
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
              <th>Fee</th>
              <th>Location</th>
              <th>Payment Status</th>
              <th>Action</th>
              <th>FeedBack</th>
            </tr>
          </thead>
          <tbody>
            {campsData?.map((camp, index) => (
              <RegisteredTable
                camp={camp}
                key={index}
                index={index}
              ></RegisteredTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisteredCamps;
