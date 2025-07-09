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
    <div className="w-full  min-h-screen flex justify-center items-center">
      <div className="">
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
            <input
              type="file"
              className="input"
              {...register("image", { required: "image is required" })}
              accept="image/*"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image?.message}</p>
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
        <SocialLogin data={"Register"} />
      </div>
    </div>
  );
};

export default Register;
