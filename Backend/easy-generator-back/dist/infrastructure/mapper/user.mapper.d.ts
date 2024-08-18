import { Optional } from 'typescript-optional';
import User from '../../domain/models/users.model';
import { UserEntity } from '../adapters/respository/users/entity/user.entity';
export default class UserMapper {
    static toDomain(userEntity: UserEntity): Optional<User>;
    static toDomains(usersEntity: UserEntity[]): User[];
}
