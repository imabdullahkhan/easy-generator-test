import User from '../../domain/models/users.model';
import UserCommand from '../commands/user.command';
export default class UserFactory {
    createUser(userCommand: UserCommand): User;
}
