/* eslint-disable @typescript-eslint/no-useless-constructor */
export default class EmailIsNotValidException extends Error {
	constructor(message: string) {
	  super(message);
	}
  }