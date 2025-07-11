import React from "react";
import Loader from "../Components/Loader/Loader";
import { Navigate } from "react-router";
import useUserRole from "../hooks/useUserRole";

const ParticipantProtected = ({ children }) => {
  const { role, isLoading } = useUserRole();
  if (isLoading) {
    <Loader />;
  }
  if (role !== "participant") {
    return <Navigate to="/forbidden" state={{ from: location }} replace />;
  }
  return children;
};

export default ParticipantProtected;
