import axios from "axios";
import React from "react";

const useAxios = () => {
  const instance = axios.create({
    baseURL: `${import.meta.env.VITE_url}`,
  });
  return instance;
};

export default useAxios;
