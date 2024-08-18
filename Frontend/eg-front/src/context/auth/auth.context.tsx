import React, { createContext } from 'react';
import { Auth } from '../../interfaces/Auth';
import { AuthAction } from './auth.action';

export const initialState: Auth = {
  user: null,
  isAuthenticated: false,
};

export const AuthContext = createContext<{
  state: Auth;
  dispatch: React.Dispatch<AuthAction>;
}>({
  state: initialState,
  dispatch: () => null,
});