import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
const LogIn = () => {
  const { loginUser, setUser } = useContext(AuthContext);
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

  return (
    <div>
      <div className="hero bg-base-100 lg:h-[550px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold ">Login Now!</h1>
            <p className="py-6">
              Welcome to the{" "}
              <span className="text-purple-400 text-2xl font-semibold">
                Zacky_T.Travel
              </span>
              . Explore our website and grab your favorite one.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-purple-600">
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
                <button className="btn hover:bg-base100 bg-purple-600">
                  Login
                </button>
              </div>
            </form>
            <p className="ml-4">
              Do not have an account{" "}
              <Link className="underline" to="/register">
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
