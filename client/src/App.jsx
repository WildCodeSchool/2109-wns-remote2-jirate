import React from 'react';
import Routes from './navigation/routes/Routes';

import ThemeConfig from './theme/index';
import GlobalStyles from './theme/globalStyles';
import useAuthUser from './hooks/useAuthUser';
import jwt_decode from 'jwt-decode';

/// Import context
import { CurrentUserContextProvider } from './contexts/currentUser';

const App = () => {
  const { logout } = useAuthUser();

  if (localStorage.getItem('jwt_token')) {
    // Set auth token header auth
    const token = localStorage.getItem('jwt_token');

    // Decode token and get user info and exp
    const decoded = jwt_decode(token);

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
    <CurrentUserContextProvider>
      <ThemeConfig>
        <GlobalStyles />
        <Routes />
      </ThemeConfig>
    </CurrentUserContextProvider>
  );
};

export default App;
