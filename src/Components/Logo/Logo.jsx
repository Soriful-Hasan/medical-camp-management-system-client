import React from "react";
import { useNavigate } from "react-router";

const Logo = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div onClick={handleNavigate} className="cursor-pointer">
      <div className="flex items-center gap-4">
        <img width={40} src="/logo2.png" alt="" />
        <h1 className="text-2xl font-bold text-my-primary">MediEase</h1>
      </div>
    </div>
  );
};

export default Logo;
