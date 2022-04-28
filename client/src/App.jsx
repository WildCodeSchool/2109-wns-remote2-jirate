import React, { useContext } from 'react';
import jwt_decode from 'jwt-decode';

import Routes from './navigation/routes/Routes';
import ThemeConfig from './theme/index';
import GlobalStyles from './theme/globalStyles';

// Import context
import { AuthContext } from './context/AuthContext';

const App = () => {
  const { logout, setCurrentUser } = useContext(AuthContext);

  if (localStorage.getItem('jwt_token')) {
    // Set auth token header auth
    const token = localStorage.getItem('jwt_token');

    // Decode token and get user info and exp
    const decoded = jwt_decode(token);

    if (decoded.id) {
      setCurrentUser(decoded.id);
    }

    // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      logout();
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
