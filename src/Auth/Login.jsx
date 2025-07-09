import React from "react";
import { useForm } from "react-hook-form";
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router";
import SocialLogin from "../Components/SocialLogin/SocialLogin";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { signIn } = useAuth();

  const location = useLocation();
  const [searchParams] = useSearchParams();
  const redirects = searchParams.get("redirects");
  console.log({ redirects });
  const navigate = useNavigate();
  const goState = redirects || "/";
  // const goState = location.state?.pathname || "/";
  console.log(goState);

  const onSubmit = (data) => {
    const email = data.email;
    const pass = data.password;
    signIn(email, pass)
      .then((res) => {
        toast.success(`Login up successfully`);
        navigate(goState);
      })
      .catch((error) => {
        toast.success(`Something was wrong`);
      });
  };
  return (
    <div className="w-full  min-h-screen flex justify-center items-center">
      <div className="">
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
            <Link to={`/auth/register?redirects=${redirects}`}>
              Already have an account?
            </Link>
          </div>
        </form>
        <SocialLogin data={"Login"} />
      </div>
    </div>
  );
};

export default Login;
