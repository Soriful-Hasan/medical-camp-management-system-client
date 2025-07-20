import React, { useRef, useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import FeedbackModal from "./FeedbackModal";

const RegisteredTable = ({ camp, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const campId = camp._id;
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  // cancel user registration
  const { mutate } = useMutation({
    mutationFn: async (id) => {
      const res = await axiosSecure.delete(`user/camp-cancel/${id}`);
      return res.data;
    },
    onSuccess: () => {
      Swal.fire(
        "Confirmed!",
        "Camp has been confirmed successfully.",
        "success"
      );
      queryClient.invalidateQueries(["registeredCamps"]);
    },
    onError: () => {
      Swal.fire("Error!", "Something went wrong.", "error");
    },
  });
  const handleCancelCamp = (campId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to confirm this camp registration?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, confirm it!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutate(campId);
      }
    });
  };

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
        {camp.confirmation_status === "pending" &&
        camp.payment_status === "unpaid" ? (
          <td onClick={() => handleCancelCamp(camp._id)}>
            <span class="cursor-pointer bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-red-400 border border-red-400">
              Cancel
            </span>
          </td>
        ) : (
          <td>
            <span class="cursor-pointer bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-red-400 border border-red-400">
              Inactive
            </span>
          </td>
        )}

        <td>
          {camp.payment_status === "paid" ? (
            <button
              onClick={() => setIsOpen(true)}
              className="px-3 cursor-pointer py-2 text-xs font-medium text-center inline-flex items-center text-white bg-my-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Feedback
            </button>
          ) : (
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
      <FeedbackModal
        campId={campId}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      ></FeedbackModal>
    </>
  );
};

export default RegisteredTable;
