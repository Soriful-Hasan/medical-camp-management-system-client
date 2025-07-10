import React from "react";
import { Link } from "react-router";

const RegisteredTable = ({ camp, index }) => {
  return (
    <tbody>
      <tr>
        <th>{index + 1}</th>
        <td>{camp.camp_name}</td>
        <td>{camp.camp_fee}</td>
        <td>{camp.location}</td>
        <td>{camp.payment_status}</td>
        <td>
          {camp.payment_status === "paid" ? (
            <>
              <Link
                to={`/dashboard/payment/${camp._id}`}
                disabled
                className="btn"
              >
                Paid
              </Link>
            </>
          ) : (
            <>
              <Link to={`/dashboard/payment/${camp._id}`} className="btn">
                Pay
              </Link>
            </>
          )}
        </td>
      </tr>
    </tbody>
  );
};

export default RegisteredTable;
