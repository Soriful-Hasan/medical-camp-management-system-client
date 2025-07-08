import React, { use, useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { signUp } = useContext(AuthContext);
  // console.log(signUp);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const pass = data.password;
    console.log(email, pass);
    signUp(email, pass)
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full  min-h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10  ">
        <div className="">
          <label htmlFor="">Full Name</label>
          <input
            className="input"
            type="text"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name?.message}</p>
          )}
        </div>

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
            register
          </button>
          <Link to={"/auth/login"}>Already have an account?</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
