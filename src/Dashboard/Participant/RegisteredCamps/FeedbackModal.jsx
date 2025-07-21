import React, { useState } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import StarRating from "../Feedback/StarRating";

const FeedbackModal = ({ campId, isOpen, setIsOpen }) => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [rating, setRating] = useState(0);
  const { user } = useAuth();
  const { mutate: submitRating } = useMutation({
    mutationFn: async (ratingData) => {
      const res = await axiosSecure.post("user/feedback", ratingData);
      return res.data;
    },
    onSuccess: () => {
      setIsOpen(false);
      Swal.fire("Success!", "Your feedback has been submitted.", "success");
      queryClient.invalidateQueries(["feedbacks"]); 
    },
    onError: () => {
      Swal.fire("Oops!", "Failed to submit feedback.", "error");
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const onSubmit = (data) => {
    const feedbackData = {
      campId: campId,
      name: user?.displayName,
      photo: user?.photoURL,
      feedback: data.feedback,
      rating,
    };
    submitRating(feedbackData);
  };
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-40"
    >
      <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
        <DialogPanel className="w-full max-w-3xl bg-white dark:bg-dark-primary rounded-xl shadow-xl space-y-6 p-6 sm:p-8 md:p-10 lg:p-12 max-h-[90vh] overflow-y-auto">
          <DialogTitle className="text-lg md:text-xl font-bold text-gray-900 sticky top-0 dark:bg-dark-primary dark:text-white bg-white z-10 pb-2">
            Give Your Feedback !
          </DialogTitle>
          <StarRating onRate={handleRatingChange}></StarRating>
          {/* Form Section */}
          <div className="w-full">
            <form action="" onSubmit={handleSubmit(onSubmit)} className="mt-10">
              <p className="py-4 ">Got suggestions? We'd love to hear theme!</p>
              <textarea
                {...register("feedback", { required: true })}
                className="block h-30 w-full pl-4 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-my-primary focus:border-my-primary"
                placeholder="Bio"
              ></textarea>
              {errors.feedback && <span></span>}
              <div className="flex  justify-end gap-3 col-span-2 mt-10">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 cursor-pointer py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 rounded-md cursor-pointer bg-my-primary  text-white">
                  Feedback
                </button>
              </div>
            </form>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default FeedbackModal;
