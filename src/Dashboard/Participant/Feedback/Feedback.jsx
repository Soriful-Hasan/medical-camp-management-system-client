import React, { useState } from "react";
import StarRating from "./StarRating";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const Feedback = ({ feedBackRef, campId }) => {
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
      Swal.fire("Success!", "Your feedback has been submitted.", "success");
      queryClient.invalidateQueries(["feedbacks"]); // optional: update feedback list
    },
    onError: () => {
      Swal.fire("Oops!", "Failed to submit feedback.", "error");
    },
  });
  const {
    register,
    watch,
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
    <div>
      <dialog ref={feedBackRef} id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-3xl">
          <div className="modal-action  flex flex-row-reverse justify-between">
            <form method="dialog" className="">
              {/* if there is a button, it will close the modal */}
              <button className="cursor-pointer">X</button>
            </form>
            <h3 className="font-bold text-lg">
              Send us your Feedback! {rating}
            </h3>
          </div>

          <StarRating onRate={handleRatingChange}></StarRating>

          <form action="" onSubmit={handleSubmit(onSubmit)} className="mt-10">
            <p>Got suggestions? We'd love to hear theme!</p>
            <textarea
              {...register("feedback", { required: true })}
              className="textarea w-full"
              placeholder="Bio"
            ></textarea>
            {errors.feedback && <span></span>}
            <div className="flex gap-4 mt-6  justify-end">
              <button className="btn">Send Feedback</button>
              <button className="btn">Cancel</button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Feedback;
