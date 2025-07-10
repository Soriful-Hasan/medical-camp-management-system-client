import React from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate, useSearchParams } from "react-router";
import SaveUserInfo from "../../Utility/SaveUserInfo";
import useAxios from "../../hooks/useAxios";

const SocialLogin = ({ data }) => {
  const { signInWithGoogle, setLoading, user } = useAuth();
  console.log(user);
  const axios = useAxios();

  const [searchParams] = useSearchParams();

  const redirects = searchParams.get("redirects");
  const navigate = useNavigate();
  const goState = redirects || "/";
  console.log(goState);
  const handleSocialLogin = () => {
    signInWithGoogle()
      .then((res) => {
        toast.success("login successfully");
        const name = res.user?.displayName;
        const email = res.user?.email;
        const imageUrl = res.user?.photoURL;
        console.log({ name, email, imageUrl });
        const userInfo = {
          name: name,
          email: email,
          photoURL: imageUrl,
          role: "participant",
        };
        axios
          .post("/userInfo", { userInfo })
          .then((res) => console.log(res))
          .catch((error) => console.log(error));
        navigate(goState);
        toast.success("Sign up successfully");
      })
      .catch((error) => {
        toast.error("something went wrong");
      });
  };

  
  return (
    <div className="mt-10">
      <button
        onClick={handleSocialLogin}
        className="btn w-full bg-white text-black border-[#e5e5e5]"
      >
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        {data} with Google
      </button>
    </div>
  );
};

export default SocialLogin;
