import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => { 
  const [token, setToken] = useState(null);

  useEffect(() => { 
    const storedToken = localStorage.getItem('token');
    if (storedToken) { 
      setToken(storedToken);
    } 
  }, []);

  const login = (token) => { 
    setToken(token);
    localStorage.setItem('token', token);
  };

  const logout = () => { 
    setToken(null);
    localStorage.removeItem('token');
  };

  return ( 
    <AuthContext.Provider value={{ token, login, logout }}> 
      {children} 
    </AuthContext.Provider> 
  ); 
};
