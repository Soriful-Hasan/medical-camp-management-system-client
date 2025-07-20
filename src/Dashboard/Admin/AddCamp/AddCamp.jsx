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
    onError: (error) => {},
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
      <div className="px-4 md:px-8 py-6">
        <div className="">
          <h1 className="font-bold text-2xl lg:text-4xl ">Add Medical Camp</h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Camp Name */}
          <div className="w-full">
            <label className="block font-medium">Camp Name *</label>
            <input
              type="text"
              placeholder="Camp Name"
              {...register("camp_name", { required: "Camp name is required" })}
              className="block w-full pl-4 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-my-primary focus:border-my-primary"
            />
            {errors.camp_name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.camp_name.message}
              </p>
            )}
          </div>

          {/* Image */}
          <div className="w-full">
            <label className="block font-medium ">Camp Image *</label>
            <input
              type="text"
              placeholder="Image URL"
              {...register("image", { required: "Image URL is required" })}
              className="block w-full pl-4 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-my-primary focus:border-my-primary"
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">
                {errors.image.message}
              </p>
            )}
          </div>

          {/* Fee */}
          <div className="w-full">
            <label className="block font-medium">Camp Fee *</label>
            <input
              type="number"
              placeholder="200৳"
              {...register("camp_fee", { required: "Camp fee is required" })}
              className="block w-full pl-4 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-my-primary focus:border-my-primary"
            />
            {errors.camp_fee && (
              <p className="text-red-500 text-sm mt-1">
                {errors.camp_fee.message}
              </p>
            )}
          </div>

          {/* Date */}
          <div className="w-full">
            <label className="block font-medium">Date *</label>
            <input
              type="date"
              {...register("create_date", { required: "Date is required" })}
              className="block w-full pl-4 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-my-primary focus:border-my-primary"
            />
            {errors.create_date && (
              <p className="text-red-500 text-sm mt-1">
                {errors.create_date.message}
              </p>
            )}
          </div>

          {/* Location */}
          <div className="w-full">
            <label className="block font-medium">Location *</label>
            <input
              type="text"
              placeholder="Location"
              {...register("location", { required: "Location is required" })}
              className="block w-full pl-4 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-my-primary focus:border-my-primary"
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">
                {errors.location.message}
              </p>
            )}
          </div>

          {/* Professional Name */}
          <div className="w-full">
            <label className="block font-medium">Professional Name *</label>
            <input
              type="text"
              placeholder="Dr. Name"
              {...register("professional_name", {
                required: "Professional name is required",
              })}
              className="block w-full pl-4 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-my-primary focus:border-my-primary"
            />
            {errors.professional_name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.professional_name.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div className="col-span-1 lg:col-span-2 w-full">
            <label className="block font-medium">Camp Description *</label>
            <textarea
              rows="4"
              placeholder="Write description here..."
              {...register("camp_description", {
                required: "Description is required",
              })}
              className="block w-full pl-4 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-my-primary focus:border-my-primary"
            />
            {errors.camp_description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.camp_description.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="col-span-1 lg:col-span-2">
            <button
              type="submit"
              className="w-full cursor-pointer sm:w-auto bg-my-primary hover:bg-blue-700 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Add Camp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCamp;
