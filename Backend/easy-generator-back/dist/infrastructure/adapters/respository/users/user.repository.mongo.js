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
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("mongoose");
const user_mapper_1 = require("../../../mapper/user.mapper");
let UserRepositoryMongo = class UserRepositoryMongo {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async getUserByEmail(email) {
        const user = await this.userModel.findOne({ email });
        if (!user) {
            throw new Error("User not found ");
        }
        return user_mapper_1.default.toDomain(user);
    }
    async getAll() {
        const users = await this.userModel.find();
        return user_mapper_1.default.toDomains(users);
    }
    async createUser(user) {
        const isExistUser = await this.userModel.findOne({ email: user.getEmail() });
        if (isExistUser) {
            throw new Error("User is already Exist");
        }
        console.log(user);
        let userCreated = new this.userModel(user);
        userCreated = await userCreated.save();
        return user_mapper_1.default.toDomain(userCreated);
    }
    async getUser(userId) {
        const user = await this.userModel.findById(userId);
        return user_mapper_1.default.toDomain(user);
    }
    async deleteUser(userId) {
        const userDeleted = await this.userModel.findByIdAndDelete(userId);
        return user_mapper_1.default.toDomain(userDeleted);
    }
};
UserRepositoryMongo = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserRepositoryMongo);
exports.default = UserRepositoryMongo;
//# sourceMappingURL=user.repository.mongo.js.map