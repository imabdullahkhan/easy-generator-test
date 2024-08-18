import User from '../../../domain/models/users.model';
import { UserRepository } from '../../../domain/ports/user.repository';
import { Optional } from 'typescript-optional';
import UserFactory from '../../factory/user.factory';
import LoginCommand from 'src/application/commands/login.command';
export default class LoginUserUseCase {
    private userRepository;
    private userFactory;
    constructor(userRepository: UserRepository, userFactory: UserFactory);
    handler(loginCommand: LoginCommand): Promise<Optional<User>>;
}
