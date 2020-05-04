import React, { useReducer, createContext } from 'react';
import AuthReducer from './AuthReducer';
import axios from 'axios';

// Initial state
const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  user: null,
  error: null,
  loading: true,
};

// Create context
export const AuthContext = createContext(initialState);

// Component provider
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Actions

  // Load user

  // Register user

  // Login user

  // Logout user

  // Clear errors

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        loading: state.loading,
        error: state.error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
