import React from "react";
import { useNavigate } from "react-router";

const Logo = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div onClick={handleNavigate} className="cursor-pointer">
      <h1 className="text-2xl font-bold">MediEase</h1>
    </div>
  );
};

export default Logo;
