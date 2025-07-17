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
        <td>৳{camp.camp_fee}</td>
        <td>{camp.location}</td>
        <td>
          {camp.payment_status === "paid" ? (
            <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
              {camp.payment_status}
            </span>
          ) : (
            <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
              {camp.payment_status}
            </span>
          )}
        </td>
        <td>
          {camp.confirmation_status === "pending" && (
            <button
              // onClick={() => handleConformed(regData._id)}
              className="cursor-pointer"
            >
              <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                Pending
              </span>
            </button>
          )}
          {camp.confirmation_status === "confirmed" && (
            <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
              Confirmed
            </span>
          )}
        </td>

        <td>
          {camp.payment_status === "paid" && (
            <button
              onClick={() => feedBackRef.current.showModal()}
              className="px-3 cursor-pointer py-2 text-xs font-medium text-center inline-flex items-center text-white bg-my-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Feedback
            </button>
          )}
          {camp.payment_status === "unpaid" && (
            <button
              disabled
              className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-200 rounded-lg cursor-not-allowed focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Feedback
            </button>
          )}
        </td>
        <td>
          {camp.payment_status === "paid" ? (
            <>
              <Link>
                <button
                  type="button"
                  class="text-white bg-blue-200 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  disabled
                >
                  Paid
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to={`/dashboard/payment/${camp._id}`}>
                <button
                  type="button"
                  class="text-black  cursor-pointer hover:text-white border border-my-primary hover:bg-my-primary focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-my-primary dark:text-white dark:hover:text-white dark:hover:bg-my-primary "
                >
                  Pay
                </button>
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
