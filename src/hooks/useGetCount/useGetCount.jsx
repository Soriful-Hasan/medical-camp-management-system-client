import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure";

const useCampCount = (endpoint, email) => {
  const axiosSecure = useAxiosSecure();

  const {
    data: count = 0,
    isPending,
    isError,
  } = useQuery({
    queryKey: [endpoint, email],
    enabled: !!email && !!endpoint,
    queryFn: async () => {
      const res = await axiosSecure.get(`/${endpoint}?email=${email}`);
      return res.data.count;
    },
  });

  return { count, isPending, isError };
};

export default useCampCount;
