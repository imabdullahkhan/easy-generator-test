import User from '../../../domain/models/users.model';
import { UserRepository } from '../../../domain/ports/user.repository';
import { Optional } from 'typescript-optional';
export default class GetUserUseCase {
    private userRepository;
    constructor(userRepository: UserRepository);
    handler(userId: string): Promise<Optional<User>>;
}
