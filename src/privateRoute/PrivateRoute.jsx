import React, { useContext } from "react";
import { FirebaseContext } from "../FirebaseProvider/FirebaseProvider";
import { Navigate, useLocation } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import CardSkeleton from "../Components/CardSkleton";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(FirebaseContext);
  const { pathname } = useLocation();

  if (loading) {
    return <CardSkeleton />;
  }

  if (user) {
    return children;
  }

  return <Navigate state={pathname} to="/Login" />;
};

export default PrivateRoute;
