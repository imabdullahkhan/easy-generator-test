import { authReducer } from './auth.reducer';
import { AuthActionTypes } from './auth.type';
import { Auth } from '../../interfaces/Auth';
import { AuthAction } from './auth.action';
import { User } from '../../interfaces/User';

describe('authReducer', () => {
  const initialState: Auth = {
    user: null,
    isAuthenticated: false,
  };

  const user :User = {
    _id: '1',
    name: 'John Doe',
    email: 'john@example.com',
  };

  it('should handle LOGIN', () => {
    const action: AuthAction = {
      type: AuthActionTypes.LOGIN,
      payload: user,
    };
    const expectedState = {
      user,
      isAuthenticated: true,
    };
    expect(authReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SIGNUP', () => {
    const action: AuthAction = {
      type: AuthActionTypes.SIGNUP,
      payload: user,
    };
    const expectedState = {
      user,
      isAuthenticated: true,
    };
    expect(authReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle LOGOUT', () => {
    const loggedInState: Auth = {
      user,
      isAuthenticated: true,
    };

    const action: AuthAction = {
      type: AuthActionTypes.LOGOUT,
    };

    const expectedState = {
      user: null,
      isAuthenticated: false,
    };

    expect(authReducer(loggedInState, action)).toEqual(expectedState);
  });

});
