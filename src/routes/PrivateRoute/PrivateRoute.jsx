import React, { useContext} from "react";
import { Navigate, useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { AuthProviderContext } from "../../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthProviderContext);
  const location = useLocation();

  const CSSProperties = {
    display: "block",
    position : 'absolute',
    top: '50%',
    left: '50%',
  };

  if (loading) {
    return <HashLoader color="#2563EB" 
    cssOverride={CSSProperties}
    />
  }
  if (!user) {
    return (
      <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    );
  }

  return children;
};

export default PrivateRoute;
