import React, { useState } from "react";
import { FaPen } from "react-icons/fa";

import useUserRole from "../../../hooks/useUserRole";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import UploadImage from "../../../Utility/UploadImage";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
const ParticipantProfile = () => {
  const { user, updateUserProfile, setLoading } = useAuth();
  const { role, roleLoading } = useUserRole();
  const axiosSecure = useAxiosSecure();
  // const { isLoading, updateProfileDB } = useUpdateUserProfileDB();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // update profile db

  const onSubmit = async (data) => {
    const imageFile = data.image[0];
    const res = await UploadImage(imageFile);
    const imageURL = res?.data.display_url;
    const name = data.name;

    try {
      // user data for firebase
      const updateProfileData = {
        displayName: name,
        photoURL: imageURL,
      };

      // data for DB
      const updateProfileDataDB = {
        email: user?.email,
        name: updateProfileData.displayName,
        photoURL: updateProfileData.photoURL,
      };

      const dbRes = await axiosSecure.patch(
        `participant/updateProfile/${user?.email}`,
        {
          name,
          photoURL: updateProfileDataDB.photoURL,
        }
      );
      console.log(dbRes);

      const res = await updateUserProfile(updateProfileData);
      console.log(res);
      setLoading(false);

      toast.success("Profile Updated successfully");
    } catch (error) {
      toast.error("Profile update failed!");
      console.log(error);
    }
  };

  return (
    <div className="p-4">
      <div class="md:w-2xl w-full   md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-gray-50 dark:bg-dark-primary dark:text-white shadow-sm rounded-lg text-gray-900">
        <div class="rounded-t-lg h-32 overflow-hidden">
          <img
            class="object-cover object-top w-full"
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Mountain"
          />
        </div>
        <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <img
            class="object-cover object-center h-32"
            src={user?.photoURL}
            alt="Woman looking front"
          />
        </div>
        <div class="text-center mt-2 mb-4">
          <span class="bg-green-100  text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
            {role === "participant" && "Participant"}
          </span>
          <h2 class="font-semibold mt-6">{user?.displayName}</h2>
          <p class="text-gray-500 dark:text-gray-300">{user?.email}</p>
        </div>
        <div className="border-t border-gray-200"></div>
        <div className="mb-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-sm mx-auto space-y-8 mt-10"
          >
            {/* input name for upload */}
            <div className="">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your name
              </label>
              <input
                type="text"
                name="name"
                {...register("name", { required: "Name is required" })}
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                defaultValue={user?.displayName}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            {/* select image for upload */}
            <div>
              <label htmlFor="image" className="block text-sm font-medium ">
                Upload Profile Image *
              </label>
              <input
                name="image"
                type="file"
                {...register("image", {
                  required: "Profile image is required",
                })}
                accept="image/*"
                className="block w-full mt-1 border border-gray-300 rounded-md bg-gray-50 text-sm 
                      file:bg-blue-100 file:text-black file:border-none 
                      file:px-4 file:py-2 file:rounded file:cursor-pointer"
              />
              {errors?.image && (
                <p className="text-red-500 text-sm mt-1">
                  {errors?.name?.message}
                </p>
              )}
            </div>
            <div className="mt-4 flex pb-4">
              <button
                type="submit"
                className="w-full lg:mb-10 cursor-pointer gap-2 rounded-md bg-my-primary px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ParticipantProfile;
