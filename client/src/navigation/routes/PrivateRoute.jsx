import { Navigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

const PrivateRoute = () => {
  const { data } = useQuery(IS_LOGGED_IN);

  console.log(data);
  if (data.isLoggedIn === false) {
    return <Navigate to="/login" />;
  }

  return <Navigate to="/dashboard/app" replace />;
};

export default PrivateRoute;
