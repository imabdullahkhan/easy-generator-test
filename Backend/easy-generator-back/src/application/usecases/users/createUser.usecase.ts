import { Injectable, Inject } from '@nestjs/common';
import User from '../../../domain/models/users.model';
import { UserRepository } from '../../../domain/ports/user.repository';
import { Optional } from 'typescript-optional';
import UserCommand from '../../commands/user.command';
import UserFactory from '../../factory/user.factory';

@Injectable()
export default class CreateUserUseCase {
  constructor(
    @Inject('UserRepository') private userRepository: UserRepository,
    private userFactory: UserFactory,
  ) {}

  public async handler(userCommand: UserCommand): Promise<Optional<User>> {
    const user: User = this.userFactory.createUser(userCommand);
    await user.convertPassIntoHash();
    return this.userRepository.createUser(user);
  }
}
