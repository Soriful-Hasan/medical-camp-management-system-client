import React from "react";
import { format } from "date-fns";
const PaymentHistoryTable = ({ history, index }) => {
  console.log(history.amount);
  const date = format(new Date(history.paidAt), "MMMM d, yyyy");
  const time = format(new Date(history.paidAt), "h:mm a");
  return (
    <tr>
      <th>{index + 1}</th>
      <td>${history.amount}</td>
      <td>{history.transactionId}</td>
      <td>{history.paymentMethod}</td>
      <td>{time}</td>
      <td>{date}</td>
    </tr>
  );
};

export default PaymentHistoryTable;
