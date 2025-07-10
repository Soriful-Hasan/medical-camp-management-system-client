import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useIsJoined = (campId) => {
  
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const email = user?.email;

  const { data: alreadyJoined = false, isLoading } = useQuery({
    queryKey: ["isJoined", campId, email],
    enabled: !!campId && !!email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/user/is-joined?email=${email}&campId=${campId}`
      );
      return res.data.alreadyJoined;
    },
  });
  return { alreadyJoined, isLoading };
};

export default useIsJoined;
