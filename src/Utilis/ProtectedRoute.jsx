/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import CustomContex from "./CustomContex";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = CustomContex();
  const location = useLocation();

  if (loading) {
    return (
      <div className=" flex justify-center items-center container mx-auto min-h-screen">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default ProtectedRoute;
