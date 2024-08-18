import { Injectable, Inject } from '@nestjs/common';
import User from '../../../domain/models/users.model';
import { UserRepository } from '../../../domain/ports/user.repository';
import { Optional } from 'typescript-optional';

@Injectable()
export default class GetUserUseCase {
  constructor(
    @Inject('UserRepository') private userRepository: UserRepository,
  ) {}

  public handler(userId: string): Promise<Optional<User>> {
    return this.userRepository.getUser(userId);
  }
}
