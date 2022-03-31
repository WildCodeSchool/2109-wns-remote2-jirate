import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import CurrentUserContext from '../../contexts/currentUser';

const PrivateRoute = path => {
  const { isAuthenticated } = useContext(CurrentUserContext);

  console.log(isAuthenticated);

  if (isAuthenticated !== true) {
    return <Navigate to="/login" />;
  }

  return <Navigate to={`/dashboard/${path}`} replace />;
};

export default PrivateRoute;
