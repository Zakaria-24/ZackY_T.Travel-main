import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import CustomContex from "../Utilis/CustomContex";
const LogIn = () => {
  const { loginUser, setUser, googleLogin, githubLogin } = CustomContex();
  const [toggle, setToggle] = useState(false);
  const [loginError, setLoginError] = useState();
  const [success, setSuccess] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    console.log(success);
    setSuccess("");

    const { email, password } = data;
    loginUser(email, password)
      .then((result) => {
        setUser(result.user);
        // setSuccess("Registered Successfully");
        toast.success("Login Successfully");

        // navigate after login user
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        setLoginError("Provide a valid email or password");
      });
  };

  // google login
  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      setUser(result.user);
      toast.success("Google Login Successfully");
      navigate("/");
    });
  };

  // github login
  const handleGithubLogin = () => {
    githubLogin().then((result) => {
      setUser(result.user);
      toast.success("GitHub Login Successfully");
      navigate("/");
    });
  };

  return (
    <div>
      <div className="hero bg-slate-300 lg:h-[550px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-slate-600 font-serif">
              Login Now!
            </h1>
            <p className="py-6 font-semibold">
              Welcome to the{" "}
              <span className="text-teal-500 text-2xl font-semibold font-serif">
                Zacky_T.Travels
              </span>
              . Explore our website and grab your favorite one.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-400">This field is required</span>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type={toggle ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                <span
                  className="absolute ml-72 mt-14"
                  onClick={() => setToggle(!toggle)}
                >
                  {toggle ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
                {errors.password && (
                  <span className="text-red-400">This field is required</span>
                )}
              </div>
              {loginError && <span className="text-red-400">{loginError}</span>}
              <div className="form-control mt-6">
                <button className="btn hover:bg-base100 bg-slate-500">
                  Login
                </button>
              </div>
            </form>

            <div className=" flex justify-center items-center divider">
              <img
                onClick={handleGoogleLogin}
                src="https://i.ibb.co/dbtgWYG/icons8-google-48.png"
                alt=""
              />
              <img
                onClick={handleGithubLogin}
                src="https://i.ibb.co/TYx5kzV/icons8-github-50.png"
                alt=""
              />
            </div>

            <p className="ml-6 mb-4">
              Do not have an account{" "}
              <Link
                className="underline text-slate-500 text-lg font-semibold font-serif"
                to="/register"
              >
                please register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
