import React from "react";
import { format } from "date-fns";
const PaymentHistoryTable = ({ history, index }) => {
  console.log(history.amount);
  const date = format(new Date(history.paidAt), "MMMM d, yyyy");
  const time = format(new Date(history.paidAt), "h:mm a");
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{history.camp_name}</td>
      <td>${history.amount}</td>
      <td>{history.transactionId}</td>
      <td>
        {history.payment_status === "paid" ? (
          <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
            {history.payment_status}
          </span>
        ) : (
          <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
            {history.payment_status}
          </span>
        )}
      </td>
      <td>
        {history.confirmation_status === "pending" && (
          <button className="cursor-pointer">
            <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
              Pending
            </span>
          </button>
        )}
        {history.confirmation_status === "confirmed" && (
          <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
            Confirmed
          </span>
        )}
      </td>
      <td>{history.paymentMethod}</td>
      <td>{time}</td>
      <td>{date}</td>
    </tr>
  );
};

export default PaymentHistoryTable;
