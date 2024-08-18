"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const email_exception_1 = require("../exceptions/email.exception");
const user_password_exception_1 = require("../exceptions/user.password.exception");
const bcrypt = require("bcryptjs");
class UserModel {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.validatePassword();
        this.validateEmail();
    }
    validatePassword() {
        if (this.password.length <= 5) {
            throw new user_password_exception_1.default('Password should be longer than 5 characters.');
        }
        if (!/[A-Z]/.test(this.password)) {
            throw new user_password_exception_1.default('Password should contain at least one uppercase letter.');
        }
        if (!/[a-z]/.test(this.password)) {
            throw new user_password_exception_1.default('Password should contain at least one lowercase letter.');
        }
    }
    validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(this.email)) {
            throw new email_exception_1.default('The email is not in a valid format.');
        }
    }
    async convertPassIntoHash() {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getId() {
        return this.id;
    }
    setCreateAt(createdAt) {
        this.createAt = createdAt;
        return this;
    }
}
exports.default = UserModel;
//# sourceMappingURL=users.model.js.map