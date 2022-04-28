import React, { createContext, useEffect, useState } from 'react';
import { useApolloClient } from '@apollo/client';

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const client = useApolloClient();
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const getLoggedIn = async () => {
    const authToken = localStorage.getItem('jwt_token');

    if (authToken) {
      setLoggedIn(true);
    }
  };

  const logout = () => {
    client.resetStore();
    localStorage.clear();
    window.location.href = '/login';
  };

  const setCurrentUser = async user => {
    setUser(user);
  };

  useEffect(() => {
    getLoggedIn();
  }, []);

  const valueProvider = {
    setCurrentUser,
    getLoggedIn,
    logout,
    loggedIn,
    user
  };

  return <AuthContext.Provider value={valueProvider}>{children}</AuthContext.Provider>;
};
