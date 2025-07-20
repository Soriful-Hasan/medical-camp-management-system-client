import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import StatCard from "./StatCard";
import {
  FaDollarSign,
  FaUsers,
  FaCampground,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
import DashboardBarChart from "./AdminBarChart";
const AdminDashBoard = () => {
  const axiosSecure = useAxiosSecure();

  // get all statics
  const {
    data: stats = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/analytics");
      return res.data;
    },
  });
  const {
    totalRevenue,
    totalParticipants,
    totalCamps,
    totalPaidPayments,
    totalPendingPayments,
    revenueChange,
    participantChange,
    campChange,
    paidChange,
    pendingChange,
  } = stats;
  return (
    <main className="p-6">
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {/* Total Revenue */}
        <StatCard
          title="Total Revenue"
          value={`${totalRevenue || 0}`}
          percentage={revenueChange || 0}
          icon={FaDollarSign}
          iconBg="bg-blue-100"
          iconColor="text-blue-600"
        />
        {/* Total Participants */}
        <StatCard
          title="Total Participants"
          value={totalParticipants || 0}
          percentage={participantChange || 0}
          icon={FaUsers}
          iconBg="bg-green-100"
          iconColor="text-green-600"
        />
        {/* Total Camps */}
        <StatCard
          title="Total Camps"
          value={totalCamps || 0}
          percentage={campChange || 0}
          icon={FaCampground}
          iconBg="bg-orange-100"
          iconColor="text-orange-600"
        />
        {/* Paid Payments */}
        <StatCard
          title="Total Paid Payments"
          value={totalPaidPayments || 0}
          percentage={paidChange || 0}
          icon={FaCheckCircle}
          iconBg="bg-purple-100"
          iconColor="text-purple-600"
        />
        {/* Pending Payments */}
        <StatCard
          title="Total Pending Payments"
          value={totalPendingPayments || 0}
          percentage={pendingChange || 0}
          icon={FaClock}
          iconBg="bg-red-100"
          iconColor="text-red-600"
        />
      </div>

      <DashboardBarChart data={stats}></DashboardBarChart>
    </main>
  );
};

export default AdminDashBoard;
