import { Model } from 'mongoose';
import User from '../../../../domain/models/users.model';
import { UserEntity } from './entity/user.entity';
import { Optional } from 'typescript-optional';
import { UserRepository } from '../../../../domain/ports/user.repository';
export default class UserRepositoryMongo implements UserRepository {
    private readonly userModel;
    constructor(userModel: Model<UserEntity>);
    getUserByEmail(email: string): Promise<Optional<User>>;
    getAll(): Promise<User[]>;
    createUser(user: User): Promise<Optional<User>>;
    getUser(userId: string): Promise<Optional<User>>;
    deleteUser(userId: string): Promise<Optional<User>>;
}
