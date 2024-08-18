"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvarValidator = void 0;
const common_1 = require("@nestjs/common");
const envalid_1 = require("envalid");
let EnvarValidator = class EnvarValidator {
    onModuleInit() {
        (0, envalid_1.cleanEnv)(process.env, {
            PORT: (0, envalid_1.port)(),
            NODE_ENV: (0, envalid_1.str)(),
            NODE_NAME: (0, envalid_1.str)(),
        });
    }
};
exports.EnvarValidator = EnvarValidator;
exports.EnvarValidator = EnvarValidator = __decorate([
    (0, common_1.Injectable)()
], EnvarValidator);
//# sourceMappingURL=envar-validator.js.map