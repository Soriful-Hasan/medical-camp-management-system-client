import React from "react";
import useUseRole from "../hooks/useUseRole";
import Loader from "../Components/Loader/Loader";
import { Navigate } from "react-router";

const ParticipantRoute = ({ children }) => {
  const { role, isLoading } = useUseRole();
  if (isLoading) {
    <Loader />;
  }
  if (role !== "participant") {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }
  return children;
};

export default ParticipantRoute;
