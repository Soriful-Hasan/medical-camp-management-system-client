import React, { useRef } from "react";
import UpdateCampModal from "./UpdateCampModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageCampTable = ({ camp, index }) => {
  const modalRef = useRef();
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure();

  // delete camp
  const { mutate: deleteCamp } = useMutation({
    mutationFn: async (campId) => {
      const res = await axiosSecure.delete(`/admin/deleteCamp/${campId}`);
      return res.data;
    },
    onSuccess: () => {
      Swal.fire("Deleted!", "Camp has been deleted.", "success");
      queryClient.invalidateQueries(["camps"]);
    },
    onError: (error) => {
      Swal.fire("Error!", "Failed to delete the camp.", "error");
      console.log(error);
    },
  });

  const handleDelete = (campId) => {
    console.log(campId);
    Swal.fire({
      title: "Are you sure?",
      text: "This camp will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCamp(campId);
      }
    });
  };
  
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{camp.camp_name}</td>
        <td>{camp.created_date}</td>
        <td>{camp.location}</td>
        <td>
          <button
            onClick={() => handleDelete(camp._id)}
            className="btn btn-error"
          >
            Delete
          </button>
        </td>
        <td className="text-green-500 cursor-pointer">
          <button
            className="btn btn-success"
            onClick={() => modalRef.current.showModal()}
          >
            Update
          </button>
        </td>
      </tr>
      <UpdateCampModal camp={camp} modalRef={modalRef}></UpdateCampModal>
    </>
  );
};

export default ManageCampTable;
