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
import Logo from "../Components/Logo/Logo";

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
    <div className="w-full dark:bg-dark-primary  dark:text-white text-black min-h-screen flex justify-center items-center">
      <div className="w-full m-4 md:w-sm">
        <div className="space-y-2 mb-8">
          <h1 className="text-4xl dark:text-white font-bold">Login</h1>
          <p className="text-secondary-text dark:text-gray-200">
            Enter your credentials to login to your account
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="w-full">
            <label htmlFor="email" className="block font-medium mb-1">
              Email *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                autoComplete="email"
                {...register("email", { required: "Email is required" })}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-my-primary focus:border-my-primary"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          {/* password field */}
          <div className="w-full">
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="password" className="block font-medium mb-1">
                Password *
              </label>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" },
                })}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-my-primary focus:border-my-primary"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password?.message}
              </p>
            )}
          </div>

          <div className="space-x-4">
            <button
              className="w-full cursor-pointer bg-my-primary hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-md shadow"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-4">
          <h3 class="flex items-center w-full  ">
            <span class="flex-grow bg-gray-200 rounded h-1"></span>
            <span class="mx-3 text-lg font-medium">Or</span>
            <span class="flex-grow bg-gray-200 rounded h-1"></span>
          </h3>
        </div>
        <SocialLogin data={"Login"} />
        <div className="flex justify-center mt-6">
          <Link to={"/auth/register"}>
            Don't have an account?{" "}
            <span className="text-my-primary">Sign up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
