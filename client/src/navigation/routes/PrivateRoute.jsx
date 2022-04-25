import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { loggedIn } = useContext(AuthContext);

  if (loggedIn === false) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
