import axios from "axios";
import React from "react";

const useAxiosSecure = () => {
  const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_url}`,
  });

  return axiosSecure;
};

export default useAxiosSecure;
