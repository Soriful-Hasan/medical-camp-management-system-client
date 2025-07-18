import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
const ParticipantChart = ({ data }) => {
  const chartData = [
    {
      name: "Joined Camp",
      value: data.totalJoinedCamps,

      color: "#3b82f6",
    },
    {
      name: "Participants",
      value: data.totalPaidAmount,

      color: "#10b981",
    },
    {
      name: "Camps",
      value: data.totalPaidPayments,

      color: "#fbbf24",
    },
    {
      name: "Camps",
      value: data.totalPendingPayments,

      color: "#fbbf24",
    },
  ];
  return (
    <div className="w-full h-[400px] dark:text-black bg-white dark:bg-dark-secondary rounded-xl shadow-md p-4 mt-6">
      <h2 className="text-xl dark:text-white font-semibold text-gray-800 mb-4">
        Dashboard Overview
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value">
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ParticipantChart;
