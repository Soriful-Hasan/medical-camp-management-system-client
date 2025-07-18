import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import Loader from "../../../Components/Loader/Loader";
import AnalyticsCard from "./AnalyticsCard";
import ParticipantChart from "./ParticipantChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
const ParticipantDashBoard = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const email = user?.email;
  const {
    data: parAnalyticsData,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["participantStats", email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/analytics?email=${email}`);
      console.log(res);
      return res.data;
    },
    enabled: !!email,
  });

  if (isPending) {
    return <Loader></Loader>;
  }

  const {
    totalJoinedCamps,
    totalPaidAmount,
    totalPaidPayments,
    totalPendingPayments,
  } = parAnalyticsData;

  return (
    <div className="m-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        <AnalyticsCard
          title={"Total Joined Camps"}
          value={totalJoinedCamps || 0}
          iconBg="bg-blue-100"
          icon=""
          iconColor="text-blue-600"
        />
        <AnalyticsCard
          title={"Total paid amount"}
          value={totalPaidAmount || 0}
          iconBg="bg-green-100"
          icon="faUsers"
          iconColor="text-blue-600"
        />
        <AnalyticsCard
          title={"Total paid payments"}
          icon="faUsers"
          value={totalPaidPayments || 0}
          iconBg="bg-orange-100"
          iconColor="text-blue-600"
        />
        <AnalyticsCard
          title={"Total pending payments"}
          value={totalPendingPayments || 0}
          icon="faUsers"
          iconBg="bg-purple-100"
          iconColor="text-purple-600"
        />
      </div>
      <ParticipantChart data={parAnalyticsData}></ParticipantChart>
    </div>
  );
};

export default ParticipantDashBoard;
