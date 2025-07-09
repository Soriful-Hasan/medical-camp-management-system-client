import React from "react";
import useAuth from "../hooks/useAuth";
import Loader from "../Components/Loader/Loader";
import { Navigate, useLocation, useNavigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { loading, user } = useAuth();
  const state = useLocation();

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return (
      <Navigate
        state={state}
        to={`/auth/login?redirects=${state?.pathname}`}
      ></Navigate>
    );
  }

  return children;
};

export default ProtectedRoute;
