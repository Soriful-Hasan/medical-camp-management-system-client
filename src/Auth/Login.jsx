import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Register date", console.log(data));
  };
  return (
    <div className="w-full  min-h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10  ">
        <div className="">
          <label htmlFor="">Email *</label>
          <input
            className="input"
            type="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
          )}
        </div>
        <div className="">
          <label className="block font-medium">Password *</label>
          <input
            className="input"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters" },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
          )}
        </div>
        <div className="space-x-4">
          <button className="btn" type="submit">
            Login
          </button>
          <Link to={"/auth/register"}>Already have an account?</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
