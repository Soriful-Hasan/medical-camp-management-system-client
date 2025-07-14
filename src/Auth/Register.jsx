import React, { use, useContext } from "react";
import { useForm } from "react-hook-form";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import UploadImage from "../Utility/UploadImage";
import SocialLogin from "../Components/SocialLogin/SocialLogin";
import useAxios from "../hooks/useAxios";
import SaveUserInfo from "../Utility/SaveUserInfo";

const Register = () => {
  const { signUp, updateUserProfile, setLoading } = useAuth();
  const axios = useAxios();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // redirect user when user access private route
  const [searchParams] = useSearchParams();
  const redirects = searchParams.get("redirects");
  const navigate = useNavigate();
  const goState = redirects || "/";

  console.log(goState);
  const onSubmit = async (data) => {
    const email = data.email;
    const pass = data.password;
    const imageFile = data.image[0];
    const name = data.name;

    if (pass.length < 6) {
      return toast.error("Password must have 6 character");
    }
    if (!pass.match(/[A-Z]/g)) {
      return toast.error("Password must have 1 uppercase case latter");
    }
    if (!pass.match(/[a-z]/g)) {
      return toast.error("Password must have 1 lowercase case latter");
    }

    try {
      const imageData = await UploadImage(imageFile);

      let imageUrl = "";
      if (imageData.success) {
        imageUrl = imageData.data.url;
      }

      const updateProfileData = {
        displayName: name,
        photoURL: imageUrl,
      };

      const userInfo = {
        name: name,
        email: email,
        photoURL: imageUrl,
        role: "participant",
      };
      const res = await signUp(email, pass);
      await updateUserProfile(updateProfileData);
      toast.success("Sign up successfully");

      axios
        .post("/userInfo", { userInfo })
        .then((res) => console.log(res))
        .catch((error) => console.log(error));

      navigate(goState);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
      setLoading(false);
    }

    // signUp(email, pass)
    //   .then((res) => {
    //     updateUserProfile(updateProfileData)
    //       .then((res) => console.log(res))
    //       .catch((error) => console.log(error)),
    //       toast.success("Sign up successfully");
    //     //add user data on user collection
    //     // await SaveUserInfo(userInfo)
    //     // axios
    //     //   .post("/userInfo", { userInfo })
    //     //   .then((res) => console.log(res))
    //     //   .catch((error) => console.log(error));
    //     navigate(goState);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     toast.error("Something was wrong");
    //   });
  };

  return (
    <div className="w-full dark:bg-dark-primary  min-h-screen flex justify-center items-center ">
      <div className="w-full md:w-sm m-4">
        <div className="space-y-2 mb-8 ">
          <h1 className="text-4xl dark:text-white font-bold">Register</h1>
          <p className="text-secondary-text dark:text-gray-200">
            Enter your information to register your account
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">
          {/* Full Name */}
          <div className="">
            <label htmlFor="name" className="block text-sm font-medium ">
              Full Name *
            </label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 0114 0H3z" />
                </svg>
              </div>
              <input
                id="name"
                type="text"
                {...register("name", { required: "Name is required" })}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-my-primary focus:border-my-primary"
                placeholder="Your full name"
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Image Upload */}
          <div>
            <label htmlFor="image" className="block text-sm font-medium ">
              Profile Image *
            </label>
            <input
              id="image"
              type="file"
              accept="image/*"
              {...register("image", { required: "Image is required" })}
              className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm text-sm 
              file:bg-blue-100 file:text-black file:border-none 
              file:px-4 file:py-2 file:rounded file:cursor-pointer"
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">
                {errors.image.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium ">
              Email *
            </label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <input
                id="email"
                type="email"
                {...register("email", { required: "Email is required" })}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-my-primary focus:border-my-primary"
                placeholder="your@email.com"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium ">
                Password *
              </label>
            </div>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
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
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" },
                })}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-my-primary focus:border-my-primary"
                placeholder="••••••••"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit + Redirect */}
          <div className=" pt-2">
            <button className="w-full cursor-pointer bg-my-primary  hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-md shadow">
              Register
            </button>
          </div>
        </form>
        <div className="mt-4 ">
          <h3 class="flex items-center w-full  ">
            <span class="flex-grow bg-gray-200 rounded h-1"></span>
            <span class="mx-3 text-lg font-medium">Or</span>
            <span class="flex-grow bg-gray-200 rounded h-1"></span>
          </h3>
        </div>
        <SocialLogin data={"Login"} />
        <div className="flex justify-center mt-6">
          <Link to={"/auth/login"}>
            Already have an account?{" "}
            <span className="text-my-primary">Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
