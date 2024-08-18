import { login, signup, logout } from './auth.action';
import { AuthActionTypes } from './auth.type';
import { User } from '../../interfaces/User';

describe('Auth Action Creators', () => {
  const user: User = {
    _id: '123',
    name: 'John Doe',
    email: 'john@example.com',
  };

  it('should create a login action', () => {
    const expectedAction = {
      type: AuthActionTypes.LOGIN,
      payload: user,
    };
    expect(login(user)).toEqual(expectedAction);
  });

  it('should create a signup action', () => {
    const expectedAction = {
      type: AuthActionTypes.SIGNUP,
      payload: user,
    };
    expect(signup(user)).toEqual(expectedAction);
  });

  it('should create a logout action', () => {
    const expectedAction = {
      type: AuthActionTypes.LOGOUT,
    };
    expect(logout()).toEqual(expectedAction);
  });
});
