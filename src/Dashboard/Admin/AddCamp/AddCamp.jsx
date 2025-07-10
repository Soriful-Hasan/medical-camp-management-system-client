import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import UploadImage from "../../../Utility/UploadImage";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";

const AddCamp = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const mutation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosSecure.post(`/admin/add-camp`, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["campData"] });
      toast.success("add camp successfully");
    },
    onError: (error) => console.error("Error:", error),
  });

  const onSubmit = async (data) => {
    // const imageFile = data.image[0];
    // const imageData = await UploadImage(imageFile);
    // let imageUrl = "";
    // if (imageData.success) {
    //   imageUrl = imageData.data.url;
    // }
    const getCamp_fee = data.camp_fee;
    const camp_fee = parseFloat(getCamp_fee);
    const campData = {
      camp_name: data.camp_name,
      camp_img: data.image,
      created_date: data.create_date,
      location: data.location,
      participant_count: 0,
      camp_fee: camp_fee,
      professional_name: data.professional_name,
      camp_description: data.camp_description,
      created_by: user.email,
    };
    mutation.mutate(campData);
  };
  return (
    <div className="w-8/12 mt-10 mx-auto">
      <div className="">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-10 gap-4 grid grid-cols-1 lg:grid-cols-2"
        >
          <div className="">
            <label className="block font-medium">Camp Name *</label>
            <input
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
          {/* <div className="">
            <input
              type="file"
              className="input"
              {...register("image", { required: "image is required" })}
              accept="image/*"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image?.message}</p>
            )}
          </div> */}
          <div className="">
            <label className="block font-medium">Camp Img *</label>
            <input
              className="input"
              type="text"
              {...register("image", {
                required: "Camp img required",
                minLength: {},
              })}
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image?.message}</p>
            )}
          </div>
          <div className="">
            <label className="block font-medium">Camp Fee *</label>
            <input
              className="input"
              type="text"
              {...register("camp_fee", {
                required: "Camp name required",
                minLength: {},
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            )}
          </div>
          <div className="">
            <label className="block font-medium">Date *</label>
            <input
              className="input"
              type="date"
              {...register("create_date", {
                required: "Camp name required",
                minLength: {},
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">
                {errors.create_date?.message}
              </p>
            )}
          </div>
          <div className=" ">
            <label className="block font-medium">Location *</label>
            <input
              className="input "
              type="text"
              {...register("location", {
                required: "Camp name required",
                minLength: {},
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.location?.message}</p>
            )}
          </div>
          <div className=" ">
            <label className="block font-medium">Professional Name *</label>
            <input
              className="input "
              type="text"
              {...register("professional_name", {
                required: "Camp name required",
                minLength: {},
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            )}
          </div>
          <div className=" col-span-2">
            <label className="block font-medium">Camp Description *</label>
            <input
              className="textarea w-full"
              type="text"
              {...register("camp_description", {
                required: "Camp description required",
                minLength: {},
              })}
            />
            {errors.password && (
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
  );
};

export default AddCamp;
