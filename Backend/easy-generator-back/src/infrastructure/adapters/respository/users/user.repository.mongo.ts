import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import User from '../../../../domain/models/users.model';
import { UserEntity } from './entity/user.entity';
import { Optional } from 'typescript-optional';
import UserMapper from '../../../mapper/user.mapper';
import { UserRepository } from '../../../../domain/ports/user.repository';

@Injectable()
export default class UserRepositoryMongo implements UserRepository {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserEntity>,
  ) {}

  public async getUserByEmail(email: string): Promise<Optional<User>> {
    const user = await this.userModel.findOne({email});
    if(!user){
      throw new Error ("User not found ")
    }
    return UserMapper.toDomain(user);
  }

  public async getAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return UserMapper.toDomains(users);
  }

  public async createUser(user: User): Promise<Optional<User>> {
    const isExistUser = await this.userModel.findOne({email:user.getEmail()});
    if(isExistUser){
      throw new Error ("User is already Exist");
    }
    console.log( user )
    let userCreated = new this.userModel(user);

    userCreated = await userCreated.save();
    return UserMapper.toDomain(userCreated);
  }

  public async getUser(userId: string): Promise<Optional<User>> {
    const user = await this.userModel.findById(userId);
    return UserMapper.toDomain(user);
  }

  public async deleteUser(userId: string): Promise<Optional<User>> {
    const userDeleted = await this.userModel.findByIdAndDelete(userId);
    return UserMapper.toDomain(userDeleted);
  }

}
