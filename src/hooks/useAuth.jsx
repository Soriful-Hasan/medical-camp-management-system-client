import React from "react";
import { AuthContext } from "../Provider/AuthContext";

const useAuth = () => {
  const auth = useAuth(AuthContext);
  console.log(auth);
  return auth;
};

export default useAuth;
