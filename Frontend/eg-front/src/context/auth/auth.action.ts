import { User } from '../../interfaces/User';
import { AuthActionTypes } from './auth.type';

interface LoginAction {
  type: AuthActionTypes.LOGIN;
  payload: User;
}

interface SignupAction {
  type: AuthActionTypes.SIGNUP;
  payload: User;
}

interface LogoutAction {
  type: AuthActionTypes.LOGOUT;
}

export type AuthAction = LoginAction | SignupAction | LogoutAction;

export const login = (userData: User): LoginAction => ({
  type: AuthActionTypes.LOGIN,
  payload: userData,
});

export const signup = (userData: User): SignupAction => ({
  type: AuthActionTypes.SIGNUP,
  payload: userData,
});

export const logout = (): LogoutAction => ({
  type: AuthActionTypes.LOGOUT,
});