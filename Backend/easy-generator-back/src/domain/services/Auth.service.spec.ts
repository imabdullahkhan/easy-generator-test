import { AuthService } from './Auth.service';
import * as bcrypt from 'bcryptjs';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => {
    authService = new AuthService();
  });

  describe('hashPassword', () => {
    it('should hash the password correctly', async () => {
      const password = 'StrongPassword123!';
      const hashedPassword = await authService.hashPassword(password);

      expect(hashedPassword).not.toBe(password);
      expect(await bcrypt.compare(password, hashedPassword)).toBe(true);
    });

  });

  describe('verifyPassword', () => {
    it('should return true for a correct password', async () => {
      const password = 'CorrectPassword123!';
      const hashedPassword = await bcrypt.hash(password, 10);

      const result = await authService.verifyPassword(password, hashedPassword);
      expect(result).toBe(true);
    });

    it('should return false for an incorrect password', async () => {
      const password = 'CorrectPassword123!';
      const wrongPassword = 'WrongPassword456!';
      const hashedPassword = await bcrypt.hash(password, 10);

      const result = await authService.verifyPassword(wrongPassword, hashedPassword);
      expect(result).toBe(false);
    });
  });
});
