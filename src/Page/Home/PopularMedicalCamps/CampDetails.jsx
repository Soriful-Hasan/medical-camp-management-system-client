import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loader from "../../../Components/Loader/Loader";
import CampJoinModal from "../../AllCapms/CampJoinModal";
import useIsJoined from "../../../hooks/useIsJoined";
import toast from "react-hot-toast";

const CampDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const {
    data: campDetails,
    isPending,
    error,
  } = useQuery({
    queryKey: ["details", id],
    queryFn: async () => {
      const res = await axiosSecure(`/user/camp-details/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["details", campDetails._id] });
    },
  });

  const { alreadyJoined, isLoading } = useIsJoined(id);

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="w-11/12 mx-auto p-10 ">
      <div className=" gap-10 place-items-center ">
        <div className="bg-gray-50 p-10 w-full ">
          <div className="w-full max-w-3xl ">
            <img
              className="rounded-xl w-full h-auto object-cover"
              src={campDetails?.camp_img}
              alt=""
            />
          </div>
        </div>
        <div className="space-y-10">
          <h1>
            Total Join Participant{" "}
            <span className="font-bold ml-4">
              {campDetails?.participant_count}
            </span>
          </h1>
          <div className="">
            <h1>Camp Name</h1>
            <h1>{campDetails?.camp_name}</h1>
          </div>
          <div>
            <h1>Camp Description</h1>
            <h1>{campDetails?.camp_description}</h1>
          </div>
          <div className="">
            <h1>Professional Name</h1>
            <h1>{campDetails?.professional_name}</h1>
          </div>
          <div className="">
            <h1>Camp Created</h1>
            <h1>{campDetails?.created_date}</h1>
          </div>

          <button
            onClick={() => document.getElementById("my_modal_4").showModal()}
            className="btn"
            disabled={alreadyJoined || isLoading}
          >
            {alreadyJoined ? "Already Joined" : "Join Camp"}
          </button>
          <CampJoinModal campDetails={campDetails} />
        </div>
      </div>
    </div>
  );
};

export default CampDetails;
