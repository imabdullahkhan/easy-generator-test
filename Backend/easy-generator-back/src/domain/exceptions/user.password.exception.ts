/* eslint-disable @typescript-eslint/no-useless-constructor */
export default class UserPasswordIsNotStrongException extends Error {
  constructor(message: string) {
    super(message);
  }
}
