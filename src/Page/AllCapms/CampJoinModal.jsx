import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

import { QueryCache, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const CampJoinModal = ({ campDetails }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { mutate, isPending, isSuccess, isError, error } = useMutation({
    mutationFn: async (data) => {
      const res = await axiosSecure.post("/user/join-camp", data);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Join Camp Successfully");
      queryClient.invalidateQueries({
        queryKey: ["isJoined", campDetails._id, user?.email],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = (data) => {
    data.campId = campDetails._id;
    mutate(data);
  };

  return (
    <div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className=" flex justify-between flex-row-reverse">
            <form method="dialog">
              <button className=" btn">x</button>
            </form>
            <h3 className="font-bold text-sm">Join Camp Fill Out the form</h3>
          </div>
          <div className="modal-action">
            <div className="w-full">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-2   gap-2 grid grid-cols-1 lg:grid-cols-2"
              >
                <div className="">
                  <label className="block font-medium">Camp Name *</label>
                  <input
                    value={campDetails.camp_name}
                    className="input"
                    type="text"
                    {...register("camp_name", {
                      required: "Camp name required",
                      minLength: {},
                    })}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">
                      {errors.camp_name?.message}
                    </p>
                  )}
                </div>
                <div className="">
                  <label className="block font-medium">Camp Fees *</label>
                  <input
                    value={campDetails.camp_fee}
                    className="input"
                    type="text"
                    {...register("camp_fee", {
                      required: "Camp fees required",
                      minLength: {},
                    })}
                  />
                  {errors.camp_fee && (
                    <p className="text-red-500 text-sm">
                      {errors.camp_fee?.message}
                    </p>
                  )}
                </div>
                <div className="">
                  <label className="block font-medium">Camp location *</label>
                  <input
                    value={campDetails.location}
                    className="input"
                    type="text"
                    {...register("location", {
                      required: "Camp location required",
                      minLength: {},
                    })}
                  />
                  {errors.location && (
                    <p className="text-red-500 text-sm">
                      {errors.location?.message}
                    </p>
                  )}
                </div>
                <div className="">
                  <label className="block font-medium">
                    Professional Name *
                  </label>
                  <input
                    value={campDetails.professional_name}
                    className="input"
                    type="text"
                    {...register("professional_name", {
                      required: "Camp professional Name required",
                      minLength: {},
                    })}
                  />
                  {errors.professional_name && (
                    <p className="text-red-500 text-sm">
                      {errors.professional_name?.message}
                    </p>
                  )}
                </div>
                <div className="">
                  <label className="block font-medium">
                    Participant Name *
                  </label>
                  <input
                    value={user?.displayName}
                    className="input"
                    type="text"
                    {...register("participant_name", {
                      required: "participant name required",
                      minLength: {},
                    })}
                  />
                  {errors.participant_name && (
                    <p className="text-red-500 text-sm">
                      {errors.participant_name?.message}
                    </p>
                  )}
                </div>
                <div className="">
                  <label className="block font-medium">
                    Participant Email *
                  </label>
                  <input
                    value={user?.email}
                    className="input"
                    type="text"
                    {...register("participant_email", {
                      required: "participant name required",
                      minLength: {},
                    })}
                  />
                  {errors.participant_email && (
                    <p className="text-red-500 text-sm">
                      {errors.participant_email?.message}
                    </p>
                  )}
                </div>
                <div className="">
                  <label className="block font-medium">Participant Age *</label>
                  <input
                    className="input"
                    type="number"
                    {...register("participant_age", {
                      required: "participant name required",
                      minLength: {},
                    })}
                  />
                  {errors.participant_age && (
                    <p className="text-red-500 text-sm">
                      {errors.participant_age?.message}
                    </p>
                  )}
                </div>
                <div className="">
                  <label className="block font-medium">
                    Participant Phone Number *
                  </label>
                  <input
                    className="input"
                    type="number"
                    {...register("phone_number", {
                      required: "participant name required",
                      minLength: {},
                    })}
                  />
                  {errors.phone_number && (
                    <p className="text-red-500 text-sm">
                      {errors.phone_number?.message}
                    </p>
                  )}
                </div>

                <div className="">
                  <label className="block font-medium">Select Gender *</label>
                  <select
                    {...register("gender", { required: "Gender is required" })}
                    className="border border-gray-300 px-3 py-2 "
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  {errors.gender && (
                    <p className="text-red-500 text-sm">
                      {errors.gender.message}
                    </p>
                  )}
                </div>
                <div className="">
                  <label className="block font-medium">
                    Emergency Phone Number *
                  </label>
                  <input
                    className="input"
                    type="number"
                    {...register("emergency_number", {
                      required: "Emergency Phone required",
                      minLength: {},
                    })}
                  />
                  {errors.phone_number && (
                    <p className="text-red-500 text-sm">
                      {errors.phone_number?.message}
                    </p>
                  )}
                </div>
                <div className="col-span-2">
                  <button className="btn w-full">Submit Form</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CampJoinModal;
