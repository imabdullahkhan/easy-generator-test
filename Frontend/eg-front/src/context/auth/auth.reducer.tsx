import { Auth } from '../../interfaces/Auth';
import { AuthAction } from './auth.action';
import { AuthActionTypes } from './auth.type';

export const authReducer = (state: Auth, action: AuthAction): Auth => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
    case AuthActionTypes.SIGNUP:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case AuthActionTypes.LOGOUT:
      localStorage.removeItem('user')
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};