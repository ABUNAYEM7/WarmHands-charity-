import React, { useContext } from 'react';
import { FirebaseContext } from '../FirebaseProvider/FirebaseProvider';
import { Navigate } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css';
import CardSkeleton from '../Components/CardSkleton';



const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(FirebaseContext);

  if (loading) {
    return <CardSkeleton/>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/Login" />;
};

export default PrivateRoute;
