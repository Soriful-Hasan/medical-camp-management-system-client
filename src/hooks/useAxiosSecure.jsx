import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_url}`,
});
const useAxiosSecure = () => {
  const { user, userSignOut, loading } = useAuth();
  const navigate = useNavigate();
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
          if (err?.response?.status === 401) {
            userSignOut()
              .then(() => {
                Swal.fire({
                  title: "Logged out due to token issue",
                  icon: "error",
                  draggable: true,
                });
              })
              .catch(console.error);
          }
          if (err?.response?.status === 403) {
            navigate("/forbidden", { replace: true });
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
  }, [loading, userSignOut, user, navigate]);
  return axiosInstance;
};

export default useAxiosSecure;
