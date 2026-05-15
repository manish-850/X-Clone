import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserDataContext } from "./Context/UserContext";
import { LoadingDataContext } from "./Context/LoadingContext";

const ProtectedRoute = ({ children }) => {
  const { user} = useContext(UserDataContext);
  const { loading } = useContext(LoadingDataContext);
  if (loading)
    return (
      <h2
        style={{
          backgroundColor: "black",
          height: "100vh",
          width:"100%",
          display: "flex",
          alignItems: "center",
          color: "#fff",
          justifyContent: "center",
        }}
      >
        Feed Loading....
      </h2>
    );

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;