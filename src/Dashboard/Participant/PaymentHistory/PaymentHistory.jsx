import { QueryClient, useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Loader from "../../../Components/Loader/Loader";
import PaymentHistoryTable from "./PaymentHistoryTable";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const email = user?.email;
  const { data: paymentHistory = [], isPending } = useQuery({
    queryKey: ["paymentHistory", email],
    queryFn: async () => {
      const res = await axiosSecure.get(`payment/history?email=${email}`);
      return res.data;
    },
  });
  if (isPending) {
    return <Loader />;
  }
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>Serial</th>
            <th>Amount</th>
            <th>Transaction Id</th>
            <th>Date & Time</th>
          </tr>
        </thead>
        {paymentHistory?.map((history, index) => (
          <PaymentHistoryTable history={history} index={index} key={index} />
        ))}
      </table>
    </div>
  );
};

export default PaymentHistory;
