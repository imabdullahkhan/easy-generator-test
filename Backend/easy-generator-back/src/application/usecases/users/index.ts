import CreateUserUseCase from './createUser.usecase';
import GetAllUsersUseCase from './getAllUsers.usecase';
import GetUserUseCase from './getUser.usecase';
import LoginUserUseCase from './loginUser.usecase';

export const USERS_USECASES = [
  CreateUserUseCase,
  GetAllUsersUseCase,
  GetUserUseCase,
  LoginUserUseCase
];
