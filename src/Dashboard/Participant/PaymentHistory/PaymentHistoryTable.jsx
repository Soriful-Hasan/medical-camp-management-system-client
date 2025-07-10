import React from "react";
import { format } from "date-fns";
const PaymentHistoryTable = ({ history, index }) => {
  console.log(history.amount);
  const formattedDate = format(new Date(history.paidAt), "PPPpp");
  console.log(formattedDate);
  return (
    <tbody>
      <tr>
        <th>{index + 1}</th>
        <td>{history.amount}</td>
        <td>{history.transactionId}</td>
        <td>{formattedDate}</td>
      </tr>
    </tbody>
  );
};

export default PaymentHistoryTable;
