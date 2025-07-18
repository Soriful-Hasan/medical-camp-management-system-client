import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";

const useUpdateUserProfileDB = () => {
  const axiosSecure = useAxiosSecure();

  const {
    mutateAsync: updateProfileDB,
    isPending,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: async ({ email, name, photoURL }) => {
      const res = await axiosSecure.patch(`/updateProfile/${email}`, {
        name,
        photoURL,
      });
      return res.data;
    },
  });

  return { isPending, isSuccess, updateProfileDB, isError };
};

export default useUpdateUserProfileDB;
