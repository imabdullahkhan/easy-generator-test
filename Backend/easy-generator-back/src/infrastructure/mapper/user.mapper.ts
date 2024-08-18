import { Optional } from 'typescript-optional';
import User from '../../domain/models/users.model';
import { UserEntity } from '../adapters/respository/users/entity/user.entity';

export default class UserMapper {
  public static toDomain(userEntity: UserEntity): Optional<User> {
    if (!userEntity) {
      return Optional.empty<User>();
    }
    const user = new User(
      userEntity.id,
      userEntity.name,
      userEntity.email,
      userEntity.password,
    );

    user.setCreateAt(new Date(userEntity.createAt));
    return Optional.of(user);
  }

  public static toDomains(usersEntity: UserEntity[]): User[] {
    const users = new Array<User>();
    usersEntity.forEach((userEntity) => {
      const user = this.toDomain(userEntity);
      users.push(user.get());
    });
    return users;
  }
}
