import EmailIsNotValidException from '../exceptions/email.exception';
import UserPasswordIsNotStrongException from '../exceptions/user.password.exception';
import * as bcrypt from 'bcryptjs';
export default class UserModel {
  private id?: string;

  private readonly name: string;

  private readonly email: string;

  private password: string;

  private createAt: Date;

  constructor(
    id: string,
    name: string,
    email: string,
    password: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.validatePassword();
    this.validateEmail();
  }

  public validatePassword(): void {

    if (this.password.length <= 5) {
      throw new UserPasswordIsNotStrongException('Password should be longer than 5 characters.');
    }

    if (!/[A-Z]/.test(this.password)) {
      throw new UserPasswordIsNotStrongException('Password should contain at least one uppercase letter.');
    }

    if (!/[a-z]/.test(this.password)) {
      throw new UserPasswordIsNotStrongException('Password should contain at least one lowercase letter.');
    }


  }

  public validateEmail(): void {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(this.email)) {
      throw new EmailIsNotValidException('The email is not in a valid format.');
    }


  }

  public async convertPassIntoHash(): Promise<void> {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }

  public getName(): string {
    return this.name;
  }
  public getEmail(): string {
    return this.email;
  }

  public getId(): string {
    return this.id;
  }

  public setCreateAt(createdAt: Date): this {
    this.createAt = createdAt;
    return this;
  }
}
