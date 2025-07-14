import React, { useRef } from "react";
import { Link } from "react-router";
import Feedback from "../Feedback/Feedback";

const RegisteredTable = ({ camp, index }) => {
  const feedBackRef = useRef();
  const campId = camp._id;
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{camp.camp_name}</td>
        <td>{camp.camp_fee}</td>
        <td>{camp.location}</td>
        <td>{camp.payment_status}</td>
        <td>
          {camp.confirmation_status === "pending" && (
            <button
              // onClick={() => handleConformed(regData._id)}
              className="cursor-pointer"
            >
              Pending
            </button>
          )}
          {camp.confirmation_status === "confirmed" && (
            <button>confirmed</button>
          )}
        </td>

        <td>
          {camp.payment_status === "paid" && (
            <button
              onClick={() => feedBackRef.current.showModal()}
              className="cursor-pointer"
            >
              Feedback
            </button>
          )}
          {camp.payment_status === "unpaid" && (
            <button className="cursor-pointer">N/A</button>
          )}
        </td>
        <td>
          {camp.payment_status === "paid" ? (
            <>
              <Link disabled className="btn">
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
      <Feedback feedBackRef={feedBackRef} campId={campId}></Feedback>
    </>
  );
};

export default RegisteredTable;
