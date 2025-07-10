import { useQuery } from "@tanstack/react-query";
import React from "react";
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
  console.log(campsData);
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
              <th>Action</th>
            </tr>
          </thead>
          {campsData?.map((camp, index) => (
            <RegisteredTable
              camp={camp}
              key={index}
              index={index}
            ></RegisteredTable>
          ))}
        </table>
      </div>
    </div>
  );
};

export default RegisteredCamps;
