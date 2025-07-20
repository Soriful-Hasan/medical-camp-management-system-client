import React from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate, useSearchParams } from "react-router";
import SaveUserInfo from "../../Utility/SaveUserInfo";
import useAxios from "../../hooks/useAxios";

const SocialLogin = ({ data }) => {
  const { signInWithGoogle, setLoading, user } = useAuth();

  const axios = useAxios();

  const [searchParams] = useSearchParams();

  const redirects = searchParams.get("redirects");
  const navigate = useNavigate();
  const goState = localStorage.getItem("route") || "/";
  const handleSocialLogin = () => {
    signInWithGoogle()
      .then((res) => {
        const name = res.user?.displayName;
        const email = res.user?.email;
        const imageUrl = res.user?.photoURL;
        const userInfo = {
          name: name,
          email: email,
          photoURL: imageUrl,
          role: "participant",
        };
        axios
          .post("/userInfo", { userInfo })
          .then((res) => {})
          .catch((error) => {});
        localStorage.removeItem("route");
        navigate(goState);
        toast.success(`${data} successfully`);
      })
      .catch((error) => {
        toast.error("something went wrong");
      });
  };

  return (
    <div className="mt-4 ">
      <button
        onClick={handleSocialLogin}
        className="btn w-full flex items-center justify-center gap-2 bg-white text-black border border-[#e5e5e5] shadow-sm hover:shadow-md transition"
      >
        <svg
          aria-label="Google logo"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="M0 0h512v512H0z" fill="#fff" />
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            />
            <path
              fill="#4285f4"
              d="M386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            />
            <path
              fill="#fbbc02"
              d="M90 341a208 200 0 010-171l63 49q-12 37 0 73"
            />
            <path
              fill="#ea4335"
              d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            />
          </g>
        </svg>
        <span>{data || "Sign in"} with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
