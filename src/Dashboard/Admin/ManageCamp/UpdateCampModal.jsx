import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";

const UpdateCampModal = ({ camp, modalRef }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // updated camp data
  const { mutate } = useMutation({
    mutationFn: async ({ id, data }) => {
      const res = await axiosSecure.patch(`admin/campUpdate/${id}`, data);
      return res.data;
    },
    onSuccess: () => {
      Swal.fire(
        "Updated!",
        "Participant info updated successfully.",
        "success"
      );
      queryClient.invalidateQueries(["participants"]); // Adjust to your query key
      modalRef.current.close();
    },
    onError: () => {
      Swal.fire("Error!", "Something went wrong while updating.", "error");
      modalRef.current.close();
    },
  });

  const onSubmit = (data) => {
    const campId = camp._id;
    mutate({ id: campId, data });
  };

  return (
    <dialog ref={modalRef} className="modal">
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
                  defaultValue={camp.camp_name}
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
                  defaultValue={camp.camp_fee}
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
                  defaultValue={camp.location}
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
                <label className="block font-medium">Professional Name *</label>
                <input
                  defaultValue={camp.professional_name}
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
                <label className="block font-medium">Created Date *</label>
                <input
                  defaultValue={camp.created_date}
                  className="input"
                  type="date"
                  {...register("created_date", {
                    required: "Created Date required",
                    minLength: {},
                  })}
                />
                {errors.created_date && (
                  <p className="text-red-500 text-sm">
                    {errors.created_date?.message}
                  </p>
                )}
              </div>
              <div className="">
                <label className="block font-medium">Camp Image *</label>
                <input
                  defaultValue={camp.camp_img}
                  className="input"
                  type="text"
                  {...register("camp_img", {
                    required: "Created Date required",
                    minLength: {},
                  })}
                />
                {errors.camp_img && (
                  <p className="text-red-500 text-sm">
                    {errors.camp_img?.message}
                  </p>
                )}
              </div>
              <div className="col-span-2">
                <label className="block font-medium">Camp Description *</label>
                <input
                  defaultValue={camp.camp_description}
                  className="textarea w-full"
                  type="text"
                  {...register("camp_description", {
                    required: "Camp Description required",
                    minLength: {},
                  })}
                />
                {errors.camp_description && (
                  <p className="text-red-500 text-sm">
                    {errors.camp_description?.message}
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
  );
};

export default UpdateCampModal;
