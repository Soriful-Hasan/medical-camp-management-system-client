import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const RegisteredCampTable = ({ regData, index }) => {
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure();

  const { mutate } = useMutation({
    mutationFn: async (id) => {
      const res = await axiosSecure.patch(`/admin/camp-confirm/${id}`);
      console.log(res);
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
  const handleConformed = (participantId) => {
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
        mutate(participantId);
      }
    });
  };

  // Cancel camp

  const { mutate: deleteParticipant } = useMutation({
    mutationFn: async (id) => {
      const res = await axiosSecure.delete(`/admin/register-camp-delete/${id}`);
      return res.data;
    },
    onSuccess: () => {
      Swal.fire("Deleted!", "Participant has been removed.", "success");
      queryClient.invalidateQueries(["registeredCamps"]);
    },
    onError: () => {
      Swal.fire("Error!", "Failed to delete participant.", "error");
    },
  });
  const handleDelete = (participantId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel this camp registration request?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, confirm it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteParticipant(participantId);
      }
    });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{regData.participant_name}</td>
      <td>{regData.camp_name}</td>
      <td>{regData.camp_fee}৳</td>
      <td>
        {regData.payment_status === "paid" ? (
          <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
            Paid
          </span>
        ) : (
          <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
            Unpaid
          </span>
        )}
      </td>
      <td>
        {regData.confirmation_status === "pending" && (
          <button
            onClick={() => handleConformed(regData._id)}
            className="cursor-pointer"
          >
            <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-red-400 border border-red-400">
              Confirm
            </span>
          </button>
        )}
        {regData.confirmation_status === "confirmed" && (
          <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
            Confirmed
          </span>
        )}
      </td>

      {regData.payment_status === "paid" &&
      regData.confirmation_status === "confirmed" ? (
        <td>
          <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
            Approved
          </span>
        </td>
      ) : (
        <td onClick={() => handleDelete(regData._id)}>
          <span class="cursor-pointer bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-red-400 border border-red-400">
            Cancel
          </span>
        </td>
      )}
    </tr>
  );
};

export default RegisteredCampTable;
