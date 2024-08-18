import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  HttpStatus,
  Body,
  Param,
} from '@nestjs/common';
import UserCommand from '../../application/commands/user.command';
import GetAllUsersUseCase from '../../application/usecases/users/getAllUsers.usecase';
import GetUserUseCase from '../../application/usecases/users/getUser.usecase';
import CreateUserUseCase from '../../application/usecases/users/createUser.usecase';
import User from '../../domain/models/users.model';
import LoginCommand from 'src/application/commands/login.command';
import LoginUserUseCase from 'src/application/usecases/users/loginUser.usecase';

@Controller('users')
export default class UserController {
  constructor(
    private getAllUsersUseCase: GetAllUsersUseCase,
    private readonly getUserUseCase: GetUserUseCase,
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly loginUserUseCase : LoginUserUseCase
  ) {}

  @Get()
  public async getUsers(@Res() request): Promise<any> {
    const users = await this.getAllUsersUseCase.handler();
    return request.status(HttpStatus.OK).json(users);
  }

  @Get(':id')
  public async getUser(
    @Res() request,
    @Param('id') id: string,
  ): Promise<any> {
    const user = await this.getUserUseCase.handler(id);
    return request.status(HttpStatus.OK).json(user);
  }

  @Post('/signup')
  public async createUser(
    @Res() request,
    @Body() user: UserCommand,
  ): Promise<any> {
    const userCreated = await this.createUserUseCase.handler(user);
    return request.status(HttpStatus.CREATED).json(userCreated);
  }

  @Post('/login')
  public async loginUser(
    @Res() request,
    @Body() user: LoginCommand,
  ): Promise<any> {
    const userCreated = await this.loginUserUseCase.handler(user);
    return request.status(HttpStatus.OK).json(user);
  }



}
