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

  // delete camp
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
      text: "Do you want to confirm this camp registration?",
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
    <tbody>
      <tr>
        <th>{index + 1}</th>
        <td>{regData.participant_name}</td>
        <td>{regData.camp_name}</td>
        <td>{regData.camp_fee}</td>
        <td>{regData.payment_status}</td>
        <td>
          {regData.conformation_status === "pending" && (
            <button
              onClick={() => handleConformed(regData._id)}
              className="cursor-pointer"
            >
              Pending
            </button>
          )}
          {regData.conformation_status === "confirmed" && (
            <button>confirmed</button>
          )}
        </td>

        {regData.payment_status === "paid" &&
        regData.conformation_status === "confirmed" ? (
          <td>Not Cancel</td>
        ) : (
          <td onClick={() => handleDelete(regData._id)}>Cancel</td>
        )}
      </tr>
    </tbody>
  );
};

export default RegisteredCampTable;
