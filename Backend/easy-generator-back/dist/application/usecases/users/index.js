"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USERS_USECASES = void 0;
const createUser_usecase_1 = require("./createUser.usecase");
const getAllUsers_usecase_1 = require("./getAllUsers.usecase");
const getUser_usecase_1 = require("./getUser.usecase");
const loginUser_usecase_1 = require("./loginUser.usecase");
exports.USERS_USECASES = [
    createUser_usecase_1.default,
    getAllUsers_usecase_1.default,
    getUser_usecase_1.default,
    loginUser_usecase_1.default
];
//# sourceMappingURL=index.js.map