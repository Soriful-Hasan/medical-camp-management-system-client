import React from "react";

import { Navigate, useLocation } from "react-router";
import Loader from "../Components/Loader/Loader";
import useUserRole from "../hooks/useUserRole";

const AdminProtected = ({ children }) => {
  const { role, isLoading } = useUserRole();
  const location = useLocation();
  if (isLoading) {
    return <Loader />;
  }
  if (role !== "admin") {
    return (
      <Navigate to="/forbidden" state={{ from: location }} replace></Navigate>
    );
  }
  return children;
};

export default AdminProtected;
