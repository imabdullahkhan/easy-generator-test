import User from '../../../domain/models/users.model';
import { UserRepository } from '../../../domain/ports/user.repository';
import { Optional } from 'typescript-optional';
import UserCommand from '../../commands/user.command';
import UserFactory from '../../factory/user.factory';
export default class CreateUserUseCase {
    private userRepository;
    private userFactory;
    constructor(userRepository: UserRepository, userFactory: UserFactory);
    handler(userCommand: UserCommand): Promise<Optional<User>>;
}
