import User from '../models/users.model';
import { Optional } from 'typescript-optional';
export interface UserRepository {
    getAll(): Promise<User[]>;
    getUser(id: string): Promise<Optional<User>>;
    getUserByEmail(email: string): Promise<Optional<User>>;
    createUser(user: User): Promise<Optional<User>>;
    deleteUser(userId: string): Promise<Optional<User>>;
}
