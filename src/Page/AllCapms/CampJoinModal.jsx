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
      <dialog
        id="my_modal_4"
        className="modal backdrop:bg-black backdrop:bg-opacity-50"
      >
        <div className="modal-box w-full max-w-[95vw] md:max-w-3xl max-h-[90vh] overflow-y-auto p-4 sm:p-6">
          <div className="flex justify-between flex-row-reverse">
            <form method="dialog">
              <button className="btn btn-sm md:btn-md px-4 py-2">x</button>
            </form>
            <h3 className="font-bold text-lg sm:text-xl">
              Join Camp Fill Out the form
            </h3>
          </div>
          <div className="modal-action">
            <div className="w-full">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 gap-3 md:gap-4 lg:grid-cols-2"
              >
                <div>
                  <label className="block font-medium">Camp Name *</label>
                  <input
                    value={campDetails.camp_name}
                    className="mt-2 block w-full p-3 text-base text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 min-h-[44px]"
                    type="text"
                    {...register("camp_name", {
                      required: "Camp name required",
                      minLength: {
                        value: 3,
                        message: "Camp name must be at least 3 characters",
                      },
                    })}
                  />
                  {errors.camp_name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.camp_name?.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block font-medium">Camp Fees *</label>
                  <input
                    value={campDetails.camp_fee}
                    className="mt-2 block w-full p-3 text-base text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 min-h-[44px]"
                    type="text"
                    {...register("camp_fee", {
                      required: "Camp fees required",
                      minLength: {
                        value: 1,
                        message: "Camp fees must be provided",
                      },
                    })}
                  />
                  {errors.camp_fee && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.camp_fee?.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block font-medium">Camp location *</label>
                  <input
                    value={campDetails.location}
                    className="mt-2 block w-full p-3 text-base text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 min-h-[44px]"
                    type="text"
                    {...register("location", {
                      required: "Camp location required",
                      minLength: {
                        value: 3,
                        message: "Location must be at least 3 characters",
                      },
                    })}
                  />
                  {errors.location && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.location?.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block font-medium">
                    Professional Name *
                  </label>
                  <input
                    value={campDetails.professional_name}
                    className="mt-2 block w-full p-3 text-base text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 min-h-[44px]"
                    type="text"
                    {...register("professional_name", {
                      required: "Professional name required",
                      minLength: {
                        value: 3,
                        message:
                          "Professional name must be at least 3 characters",
                      },
                    })}
                  />
                  {errors.professional_name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.professional_name?.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block font-medium">
                    Participant Name *
                  </label>
                  <input
                    value={user?.displayName}
                    className="mt-2 block w-full p-3 text-base text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 min-h-[44px]"
                    type="text"
                    {...register("participant_name", {
                      required: "Participant name required",
                      minLength: {
                        value: 3,
                        message:
                          "Participant name must be at least 3 characters",
                      },
                    })}
                  />
                  {errors.participant_name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.participant_name?.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block font-medium">
                    Participant Email *
                  </label>
                  <input
                    value={user?.email}
                    className="mt-2 block w-full p-3 text-base text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 min-h-[44px]"
                    type="text"
                    {...register("participant_email", {
                      required: "Participant email required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.participant_email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.participant_email?.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block font-medium">Your Age *</label>
                  <input
                    className="mt-2 block w-full p-3 text-base text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 min-h-[44px]"
                    type="number"
                    placeholder="22"
                    {...register("participant_age", {
                      required: "Participant age required",
                      min: { value: 1, message: "Age must be at least 1" },
                    })}
                  />
                  {errors.participant_age && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.participant_age?.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block font-medium">Phone Number *</label>
                  <input
                    className="mt-2 block w-full p-3 text-base text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 min-h-[44px]"
                    type="tel"
                    placeholder="+88018*********"
                    {...register("phone_number", {
                      required: "Phone number required",
                      pattern: {
                        value: /^\+?[1-9]\d{1,14}$/,
                        message: "Invalid phone number",
                      },
                    })}
                  />
                  {errors.phone_number && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone_number?.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block font-medium">Select Gender *</label>
                  <select
                    {...register("gender", { required: "Gender is required" })}
                    className="mt-2 block w-full p-3 text-base text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 min-h-[44px]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Your Gender?
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  {errors.gender && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.gender.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block font-medium">
                    Emergency Phone Number *
                  </label>
                  <input
                    className="mt-2 block w-full p-3 text-base text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 min-h-[44px]"
                    type="tel"
                    placeholder="+88018*********"
                    {...register("emergency_number", {
                      required: "Emergency phone required",
                      pattern: {
                        value: /^\+?[1-9]\d{1,14}$/,
                        message: "Invalid phone number",
                      },
                    })}
                  />
                  {errors.emergency_number && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.emergency_number?.message}
                    </p>
                  )}
                </div>
                <div className="col-span-2">
                  <button className="btn bg-blue-600 text-white px-4 py-2 w-full sm:w-auto">
                    Submit Form
                  </button>
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
