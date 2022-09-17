
import { Outlet, Navigate } from "react-router-dom";

const Privateroutes = () => {
    
  let hastoken = JSON.parse(localStorage.getItem("auth"));

  return hastoken ? <Outlet /> : <Navigate to="/" />;
};

export default Privateroutes;
