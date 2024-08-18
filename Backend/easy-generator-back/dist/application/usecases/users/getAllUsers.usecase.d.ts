import User from '../../../domain/models/users.model';
import { UserRepository } from '../../../domain/ports/user.repository';
export default class GetAllUsersUseCase {
    private userRepository;
    constructor(userRepository: UserRepository);
    handler(): Promise<User[]>;
}
