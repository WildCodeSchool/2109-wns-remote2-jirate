import React from 'react';
import Routes from './navigation/routes/Routes';

import ThemeConfig from './theme/index';
import GlobalStyles from './theme/globalStyles';
import useAuthUser from './hooks/useAuthUser';
import jwt_decode from 'jwt-decode';
import { isLoggedInVar } from './apollo/cache/cache';

const App = () => {
  const { logout } = useAuthUser();

  if (localStorage.getItem('jwt_token')) {
    // Set auth token header auth
    const token = localStorage.getItem('jwt_token');

    // Decode token and get user info and exp
    const decoded = jwt_decode(token);

    if (decoded.id) {
      isLoggedInVar(true);
    }

    // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      logout();
      // Redirect to login
      window.location.href = '/login';
    }
  }

  return (
    <ThemeConfig>
      <GlobalStyles />
      <Routes />
    </ThemeConfig>
  );
};

export default App;
