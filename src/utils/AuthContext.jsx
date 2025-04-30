import React, { createContext, useState, useContext } from 'react';
import mockAuthService from "./mockAuthService";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const register = async (userData) => {
    try {
      setIsLoading(true);
      const response = await mockAuthService.register(
        userData.email,
        userData.password,
        userData.name
      );
      setCurrentUser(response.user);
      setToken(response.token);
      return response;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (userData) => {
    try {
     setIsLoading(true);
     const response = await mockAuthService.login(
       userData.email,
       userData.password
     );
     setCurrentUser(response.user);
     setToken(response.token);
     return response;
    } catch (error) {
     console.error('Login error:', error);
     throw error;
    } finally {
     setIsLoading(false);
    }
    };

    const logout = () => {
      setCurrentUser(null);
      setToken(null);
    };

  const value = {
    currentUser,
    setCurrentUser,
    token,
    setToken,
    isLoading,
    setIsLoading,
    register,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};