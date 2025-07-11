import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import Swal from "sweetalert2";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_url}`,
});
const useAxiosSecure = () => {
  const { user, signOut, loading } = useAuth();
  useEffect(() => {
    if (!loading && user?.accessToken) {
      // request interceptor
      const requestInterCeptor = axiosInstance.interceptors.request.use(
        (config) => {
          config.headers.Authorization = `Bearer ${user?.accessToken}`;
          return config;
        }
      );
      // response interceptor
      const responseInterCeptor = axiosInstance.interceptors.response.use(
        (res) => res,
        (err) => {
          if (err?.response?.status === 401 || err?.response?.status === 403) {
            signOut()
              .then(() => {
                Swal.fire({
                  title: "Logged out due to token issue",
                  icon: "error",
                  draggable: true,
                });
              })
              .catch(console.error);
          }
          return Promise.reject(err);
        }
      );
      // Cleanup to prevent multiple interceptors on re-renders
      return () => {
        axiosInstance.interceptors.request.eject(requestInterCeptor);
        axiosInstance.interceptors.response.eject(responseInterCeptor);
      };
    }
  }, [loading, signOut, user]);
  return axiosInstance;
};

export default useAxiosSecure;
