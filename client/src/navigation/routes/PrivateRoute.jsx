import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
// import CurrentUserContext from '../../contexts/currentUser';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'graphql-tag';



const PrivateRoute = () => {

  // if (isAuthenticated !== true) {
  //   return <Navigate to="/login" />;
  // }

  return <Navigate to="/dashboard" replace />;
};

export default PrivateRoute;
