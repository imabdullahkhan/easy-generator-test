import { Injectable, Inject } from '@nestjs/common';
import User from '../../../domain/models/users.model';
import { UserRepository } from '../../../domain/ports/user.repository';
import { Optional } from 'typescript-optional';
import UserCommand from '../../commands/user.command';
import UserFactory from '../../factory/user.factory';
import LoginCommand from 'src/application/commands/login.command';
import * as bcrypt from 'bcryptjs';

@Injectable()
export default class LoginUserUseCase {
  constructor(
    @Inject('UserRepository') private userRepository: UserRepository,
    private userFactory: UserFactory,
  ) {}

  public async handler(loginCommand: LoginCommand): Promise<Optional<User>> {
	let user  = await this.userRepository.getUserByEmail(loginCommand.password);
	if(!user) {
		throw new Error(" no user found on this email")
	}
	return user
  }
}
