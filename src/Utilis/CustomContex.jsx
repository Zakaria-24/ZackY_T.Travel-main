import { AuthContext } from "./../Provider/AuthProvider";
import { useContext } from "react";

const CustomContex = () => {
  const Contex = useContext(AuthContext);
  return Contex;
};

export default CustomContex;
