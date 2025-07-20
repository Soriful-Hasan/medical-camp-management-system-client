import React from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
const Modal = ({ setIsOpen, isOpen, campDetails }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { mutate } = useMutation({
    mutationFn: async (data) => {
      const res = await axiosSecure.post("/user/join-camp", data);
      return res.data;
    },
    onSuccess: () => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Join camp successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      queryClient.invalidateQueries({
        queryKey: ["isJoined", campDetails._id, user?.email],
      });
      setIsOpen(false);
    },
    onError: (error) => {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Something wnt wrong !",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  });

  const onSubmit = (data) => {
    data.campId = campDetails._id;
    mutate(data);
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-40"
      >
        {/* Backdrop and Scrollable Center Container */}
        <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
          <DialogPanel className="w-full max-w-3xl bg-white dark:bg-dark-primary rounded-xl shadow-xl space-y-6 p-6 sm:p-8 md:p-10 lg:p-12 max-h-[90vh] overflow-y-auto">
            {/* Title */}
            <DialogTitle className="text-lg md:text-xl font-bold text-gray-900 sticky top-0 dark:bg-dark-primary dark:text-white bg-white z-10 pb-2">
              Join Camp
            </DialogTitle>

            {/* Form Section */}
            <div className="w-full">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 gap-3 md:gap-4 lg:grid-cols-2"
              >
                <div className="w-full ">
                  <label className="block font-medium">Camp Name *</label>
                  <input
                    value={campDetails.camp_name}
                    className="block w-full pl-4 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-my-primary focus:border-my-primary"
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
                <div className="w-full">
                  <label className="block font-medium">Camp Fees *</label>
                  <input
                    value={campDetails.camp_fee}
                    className="block w-full pl-4 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-my-primary focus:border-my-primary"
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
                <div className="w-full">
                  <label className="block font-medium">Camp location *</label>
                  <input
                    value={campDetails.location}
                    className="block w-full pl-4 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-my-primary focus:border-my-primary"
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
                <div className="w-full">
                  <label className="block font-medium">
                    Professional Name *
                  </label>
                  <input
                    value={campDetails.professional_name}
                    className="block w-full pl-4 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-my-primary focus:border-my-primary"
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
                <div className="w-full">
                  <label className="block font-medium">
                    Participant Name *
                  </label>
                  <input
                    value={user?.displayName}
                    className="block w-full pl-4 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-my-primary focus:border-my-primary"
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
                <div className="w-full">
                  <label className="block font-medium">
                    Participant Email *
                  </label>
                  <input
                    value={user?.email}
                    className="block w-full pl-4 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-my-primary focus:border-my-primary"
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
                <div className="w-full">
                  <label className="block font-medium">Your Age *</label>
                  <input
                    className="block w-full pl-4 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-my-primary focus:border-my-primary"
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
                <div className="w-full">
                  <label className="block font-medium">Phone Number *</label>
                  <input
                    className="block w-full pl-4 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-my-primary focus:border-my-primary"
                    type="tel"
                    placeholder="+88018*********"
                    {...register("phone_number", {
                      required: "Phone number required",
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
                    className="block w-full pl-4 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-my-primary focus:border-my-primary"
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
                <div className="w-full">
                  <label className="block font-medium">
                    Emergency Phone Number *
                  </label>
                  <input
                    className="block w-full pl-4 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-my-primary focus:border-my-primary"
                    type="tel"
                    placeholder="+88018*********"
                    {...register("emergency_number", {
                      required: "Emergency phone required",
                    })}
                  />
                  {errors.emergency_number && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.emergency_number?.message}
                    </p>
                  )}
                </div>
                <div className="flex justify-end gap-3 col-span-2 mt-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-4 cursor-pointer py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700"
                  >
                    Cancel
                  </button>
                  <button className="px-4 py-2 rounded-md cursor-pointer bg-my-primary  text-white">
                    Join Camp
                  </button>
                </div>
              </form>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default Modal;
