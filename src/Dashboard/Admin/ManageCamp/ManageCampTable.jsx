import React, { useRef, useState } from "react";
import UpdateCampModal from "./UpdateCampModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import Loader from "../../../Components/Loader/Loader";

const ManageCampTable = ({ camp, index, campCountPending, isPending }) => {
  const modalRef = useRef();
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);

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
    },
  });

  const handleDelete = (campId) => {
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
  // if (isPending || campCountPending) {
  //   return <Loader />;
  // }
  return (
    <tr>
      <td>{camp.camp_name}</td>
      <td>{camp.created_date}</td>
      <td>{camp.location}</td>
      <td>{camp.participant_count}</td>
      <td>৳{camp.camp_fee}</td>
      <td>{camp.professional_name}</td>
      <td>
        <MdDeleteForever
          size={25}
          className="cursor-pointer"
          color="red"
          onClick={() => handleDelete(camp._id)}
        />
      </td>
      <td className=" cursor-pointer">
        <BiSolidEdit size={25} onClick={() => setIsOpen(!isOpen)} />
      </td>
      <UpdateCampModal
        camp={camp}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      ></UpdateCampModal>
    </tr>
  );
};

export default ManageCampTable;
