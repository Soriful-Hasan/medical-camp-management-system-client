import React from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useUserRole = () => {
  const { user } = useAuth();

  const email = user?.email;
  const axiosSecure = useAxiosSecure();
  const { data: role, isLoading } = useQuery({
    queryKey: ["userRole", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/role/${email}`);
      return res.data.role;
    },
  });

  return { role, isLoading };
};

export default useUserRole;
