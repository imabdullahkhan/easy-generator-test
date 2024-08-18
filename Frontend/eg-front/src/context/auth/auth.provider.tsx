import React, { useReducer, ReactNode, useEffect } from 'react';
import { authReducer } from './auth.reducer';
import { AuthContext, initialState } from './auth.context';
import { AuthActionTypes } from './auth.type';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      dispatch({ type: AuthActionTypes.LOGIN, payload: JSON.parse(storedUser) });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};