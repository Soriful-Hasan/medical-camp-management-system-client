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

const DashboardBarChart = ({ data }) => {
  const chartData = [
    {
      name: "Revenue",
      value: data.totalRevenue,
      change: data.revenueChange,
      color: "#3b82f6",
    },
    {
      name: "Participants",
      value: data.totalParticipants,
      change: data.participantChange,
      color: "#10b981",
    },
    {
      name: "Camps",
      value: data.totalCamps,
      change: data.campChange,
      color: "#fbbf24",
    },
    {
      name: "Paid Payments",
      value: data.totalPaidPayments,
      change: data.paidPaymentChange,
      color: "#f472b6",
    },
    {
      name: "Pending Payments",
      value: data.totalPendingPayments,
      change: 0, // Optional: if you don't track this
      color: "#f87171",
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

export default DashboardBarChart;
