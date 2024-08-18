import UserModel from './users.model';
import EmailIsNotValidException from '../exceptions/email.exception';
import UserPasswordIsNotStrongException from '../exceptions/user.password.exception';
import * as bcrypt from 'bcryptjs';

describe('UserModel', () => {
  const validEmail = 'test@example.com';
  const validPassword = 'StrongPass123';

  describe('constructor', () => {
    it('should create a new UserModel instance', () => {
      const user = new UserModel('1', 'John Doe', validEmail, validPassword);
      expect(user.getName()).toBe('John Doe');
      expect(user.getEmail()).toBe(validEmail);
      expect(user.getId()).toBe('1');
    });

    it('should throw UserPasswordIsNotStrongException if password is too short', () => {
      expect(() => {
        new UserModel('1', 'John Doe', validEmail, '123');
      }).toThrow(UserPasswordIsNotStrongException);
    });

    it('should throw UserPasswordIsNotStrongException if password has no uppercase letter', () => {
      expect(() => {
        new UserModel('1', 'John Doe', validEmail, 'strongpass123');
      }).toThrow(UserPasswordIsNotStrongException);
    });

    it('should throw UserPasswordIsNotStrongException if password has no lowercase letter', () => {
      expect(() => {
        new UserModel('1', 'John Doe', validEmail, 'STRONGPASS123');
      }).toThrow(UserPasswordIsNotStrongException);
    });

    it('should throw EmailIsNotValidException if email is invalid', () => {
      expect(() => {
        new UserModel('1', 'John Doe', 'invalid-email', validPassword);
      }).toThrow(EmailIsNotValidException);
    });
  });

  describe('convertPassIntoHash', () => {
    it('should hash the password correctly', async () => {
      const user = new UserModel('1', 'John Doe', validEmail, validPassword);
      const plainPassword = user['password'];
      await user.convertPassIntoHash();
      expect(user['password']).not.toBe(plainPassword);
      const isMatch = await bcrypt.compare(plainPassword, user['password']);
      expect(isMatch).toBe(true);
    });
  });

  describe('getters', () => {
    it('should return the correct name', () => {
      const user = new UserModel('1', 'John Doe', validEmail, validPassword);
      expect(user.getName()).toBe('John Doe');
    });

    it('should return the correct email', () => {
      const user = new UserModel('1', 'John Doe', validEmail, validPassword);
      expect(user.getEmail()).toBe(validEmail);
    });

    it('should return the correct id', () => {
      const user = new UserModel('1', 'John Doe', validEmail, validPassword);
      expect(user.getId()).toBe('1');
    });
  });

  describe('setCreateAt', () => {
    it('should set the createAt date correctly', () => {
      const user = new UserModel('1', 'John Doe', validEmail, validPassword);
      const date = new Date();
      user.setCreateAt(date);
      expect(user['createAt']).toBe(date);
    });
  });
});
