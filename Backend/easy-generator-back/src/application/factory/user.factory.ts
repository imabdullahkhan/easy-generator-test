/* eslint-disable class-methods-use-this */
import { Injectable } from '@nestjs/common';
import User from '../../domain/models/users.model';
import UserCommand from '../commands/user.command';

@Injectable()
export default class UserFactory {
  public createUser(userCommand: UserCommand): User {
    return new User(
      '',
      userCommand.name,
      userCommand.email,
      userCommand.password
    );
  }
  
}
