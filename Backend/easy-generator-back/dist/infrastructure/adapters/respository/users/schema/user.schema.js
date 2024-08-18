"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: String,
    password: String,
    createAt: {
        type: Date,
        default: Date.now,
    },
});
exports.default = UserSchema;
//# sourceMappingURL=user.schema.js.map