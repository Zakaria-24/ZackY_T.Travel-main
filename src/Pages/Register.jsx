import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import CustomContex from "../Utilis/CustomContex";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { registerUser, setUser } = CustomContex();
  const [regError, setRegError] = useState("");
  const [success, setSuccess] = useState("");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { fullName, photoUrl, email, password } = data;

    if (password.length < 6) {
      setRegError("Password must be at least 6 characters");
      return;
    }
    if (!/^(?=.*[A-Z]).+$/.test(password)) {
      setRegError("password must be at least one uppercase letter");
      return;
    }
    if (!/^(?=.*[a-z]).+$/.test(password)) {
      setRegError("password must be at least one lowercase letter");
      return;
    }
    console.log(success);

    setRegError("");
    setSuccess("");

    registerUser(email, password)
      .then((result) => {
        setUser(result.user);
        // setSuccess("Registered Successfully");
        toast.success("Registered Successfully");
        // navigate after login user
        navigate(location?.state ? location.state : "/");

        // update user
        updateProfile(result.user, {
          displayName: fullName,
          photoURL: photoUrl,
        }).then(() => {
          // navigate after login user
          navigate("/");
        });
      })

      .catch((error) => {
        setRegError(error.message);
      });
  };

  return (
    <div>
      <div className="hero bg-base-100 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold t">Register Now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && (
                  <span className="text-red-400">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input
                  name="photoUrl"
                  type=" text"
                  placeholder="photoUrl"
                  className="input input-bordered"
                  {...register("photoUrl", { required: true })}
                />
                {errors.photoUrl && (
                  <span className="text-red-400">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name=" email"
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
                  className="absolute ml-56 mt-14"
                  onClick={() => setToggle(!toggle)}
                >
                  {toggle ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>

                {errors.password && (
                  <span className="text-red-400">This field is required</span>
                )}
                {regError && <span className="text-red-400">{regError}</span>}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-purple-600 hover:bg-base-200 ">
                  Register
                </button>
              </div>
            </form>
            <p className="ml-4">
              Already have an account{" "}
              <span className="underline ">
                <Link to="/login">please login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
