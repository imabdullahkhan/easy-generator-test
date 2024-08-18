import UserCommand from '../../application/commands/user.command';
import GetAllUsersUseCase from '../../application/usecases/users/getAllUsers.usecase';
import GetUserUseCase from '../../application/usecases/users/getUser.usecase';
import CreateUserUseCase from '../../application/usecases/users/createUser.usecase';
import LoginCommand from 'src/application/commands/login.command';
import LoginUserUseCase from 'src/application/usecases/users/loginUser.usecase';
export default class UserController {
    private getAllUsersUseCase;
    private readonly getUserUseCase;
    private readonly createUserUseCase;
    private readonly loginUserUseCase;
    constructor(getAllUsersUseCase: GetAllUsersUseCase, getUserUseCase: GetUserUseCase, createUserUseCase: CreateUserUseCase, loginUserUseCase: LoginUserUseCase);
    getUsers(request: any): Promise<any>;
    getUser(request: any, id: string): Promise<any>;
    createUser(request: any, user: UserCommand): Promise<any>;
    loginUser(request: any, user: LoginCommand): Promise<any>;
}
