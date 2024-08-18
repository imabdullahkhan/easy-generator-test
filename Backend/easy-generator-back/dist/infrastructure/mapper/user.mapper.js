"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_optional_1 = require("typescript-optional");
const users_model_1 = require("../../domain/models/users.model");
class UserMapper {
    static toDomain(userEntity) {
        if (!userEntity) {
            return typescript_optional_1.Optional.empty();
        }
        const user = new users_model_1.default(userEntity.id, userEntity.name, userEntity.email, userEntity.password);
        user.setCreateAt(new Date(userEntity.createAt));
        return typescript_optional_1.Optional.of(user);
    }
    static toDomains(usersEntity) {
        const users = new Array();
        usersEntity.forEach((userEntity) => {
            const user = this.toDomain(userEntity);
            users.push(user.get());
        });
        return users;
    }
}
exports.default = UserMapper;
//# sourceMappingURL=user.mapper.js.map