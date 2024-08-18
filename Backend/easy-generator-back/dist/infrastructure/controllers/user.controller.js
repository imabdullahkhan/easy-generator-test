"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const user_command_1 = require("../../application/commands/user.command");
const getAllUsers_usecase_1 = require("../../application/usecases/users/getAllUsers.usecase");
const getUser_usecase_1 = require("../../application/usecases/users/getUser.usecase");
const createUser_usecase_1 = require("../../application/usecases/users/createUser.usecase");
const login_command_1 = require("../../application/commands/login.command");
const loginUser_usecase_1 = require("../../application/usecases/users/loginUser.usecase");
let UserController = class UserController {
    constructor(getAllUsersUseCase, getUserUseCase, createUserUseCase, loginUserUseCase) {
        this.getAllUsersUseCase = getAllUsersUseCase;
        this.getUserUseCase = getUserUseCase;
        this.createUserUseCase = createUserUseCase;
        this.loginUserUseCase = loginUserUseCase;
    }
    async getUsers(request) {
        const users = await this.getAllUsersUseCase.handler();
        return request.status(common_1.HttpStatus.OK).json(users);
    }
    async getUser(request, id) {
        const user = await this.getUserUseCase.handler(id);
        return request.status(common_1.HttpStatus.OK).json(user);
    }
    async createUser(request, user) {
        const userCreated = await this.createUserUseCase.handler(user);
        return request.status(common_1.HttpStatus.CREATED).json(userCreated);
    }
    async loginUser(request, user) {
        const userCreated = await this.loginUserUseCase.handler(user);
        return request.status(common_1.HttpStatus.OK).json(user);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Post)('/signup'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_command_1.default]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, login_command_1.default]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "loginUser", null);
UserController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [getAllUsers_usecase_1.default,
        getUser_usecase_1.default,
        createUser_usecase_1.default,
        loginUser_usecase_1.default])
], UserController);
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map