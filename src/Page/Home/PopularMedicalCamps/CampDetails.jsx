import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loader from "../../../Components/Loader/Loader";
import CampJoinModal from "../../AllCapms/CampJoinModal";
import useIsJoined from "../../../hooks/useIsJoined";
import toast from "react-hot-toast";
import { FaUserCheck } from "react-icons/fa";
import { FaUserMd } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";
import Modal from "../../AllCapms/CampJoinModal";
import { ImLocation } from "react-icons/im";
import { TbCoinTakaFilled } from "react-icons/tb";
import { format } from "date-fns";
import { FaClock } from "react-icons/fa";
const CampDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);

  const {
    data: campDetails,
    isPending,
    error,
    refetch,
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
  const time = format(new Date(campDetails?.createdAt), "h:mm a");
  return (
    <div className="w-10/12  mx-auto place-items-center pt-20">
      <div className="gap-10 mt-6">
        <div className=" rounded-2xl p-2 md:p-10 w-full bg-my-primary/5">
          <div className="w-full max-w-3xl relative">
            <img
              className="rounded-xl w-full h-auto object-cover"
              src={campDetails?.camp_img}
              alt=""
            />
            <div className="sm:absolute mt-4 sm:mt-0 top-4 left-4 px-5 py-2 rounded-full flex items-center gap-2 text-sm text-white bg-my-primary/70">
              <p class="flex items-center gap-2">
                <FaUserCheck />
                {campDetails?.participant_count} People Joined In
              </p>
            </div>
          </div>
          <div className="py-4 place-items-center  space-y-4 mt-4">
            <div className=" ">
              <h1 className="text-2xl font-bold">{campDetails?.camp_name}</h1>
            </div>
            <div className="text-center">
              <h1 className="w-sm text-sm ">{campDetails?.camp_description}</h1>
            </div>
          </div>
        </div>
        <div className="space-y-10  mt-10  ">
          <div class=" flex sm:items-center justify-between border rounded-lg px-1 sm:px-10 py-5 bg-my-primary/6 border-base-200/90 text-lg flex-wrap flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2">
              <BsFillCalendarDateFill />
              <h1>Create Date</h1>
            </div>

            <h1>{campDetails?.created_date}</h1>
          </div>
          <div class=" flex sm:items-center justify-between border rounded-lg px-1 sm:px-10 py-5 bg-my-primary/6 border-base-200/90 text-lg flex-wrap flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2">
              <FaClock />
              <h1>Create Time</h1>
            </div>

            <h1>{time}</h1>
          </div>
          <div class=" flex sm:items-center justify-between border rounded-lg px-1 sm:px-10 py-5 bg-my-primary/6 border-base-200/90 text-lg flex-wrap flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2">
              <FaUserMd />
              <h1>Professional Name</h1>
            </div>
            <h1>{campDetails?.professional_name}</h1>
          </div>
          <div class=" flex sm:items-center justify-between border rounded-lg px-1 sm:px-10 py-5 bg-my-primary/6 border-base-200/90 text-lg flex-wrap flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2">
              <TbCoinTakaFilled /> <h1>Camp Fees</h1>
            </div>
            <h1>{campDetails?.camp_fee}৳</h1>
          </div>
          <div class=" flex sm:items-center justify-between border rounded-lg px-1 sm:px-10 py-5 bg-my-primary/6 border-base-200/90 text-lg flex-wrap flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2">
              <ImLocation /> <h1>Location0</h1>
            </div>
            <h1>{campDetails?.location}</h1>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" font-semibold py-3 mb-10 rounded-full bg-my-primary/6 cursor-pointer w-full"
            disabled={alreadyJoined || isLoading}
          >
            {alreadyJoined ? "Already Joined" : "Join Camp"}
          </button>
          <Modal
            isOpen={isOpen}
            refetch={refetch}
            setIsOpen={setIsOpen}
            campDetails={campDetails}
          />
        </div>
      </div>
    </div>
  );
};

export default CampDetails;
