import React from "react";
import useUseRole from "../hooks/useUseRole";
import { Navigate, useLocation } from "react-router";
import Loader from "../Components/Loader/Loader";

const AdminProtected = ({ children }) => {
  const [role, isLoading] = useUseRole();
  const location = useLocation();
  if (isLoading) {
    return <Loader />;
  }
  if (role !== "admin") {
    return (
      <Navigate
        to="/unauthorized"
        state={{ from: location }}
        replace
      ></Navigate>
    );
  }
  return children;
};

export default AdminProtected;
