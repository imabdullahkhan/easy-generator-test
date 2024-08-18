"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const domain_module_1 = require("../domain/domain.module");
const user_repository_mongo_1 = require("../infrastructure/adapters/respository/users/user.repository.mongo");
const user_schema_1 = require("../infrastructure/adapters/respository/users/schema/user.schema");
const user_factory_1 = require("./factory/user.factory");
const users_1 = require("./usecases/users");
let ApplicationModule = class ApplicationModule {
};
exports.ApplicationModule = ApplicationModule;
exports.ApplicationModule = ApplicationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            domain_module_1.DomainModule,
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'User',
                    schema: user_schema_1.default,
                },
            ]),
        ],
        providers: [
            user_factory_1.default,
            ...users_1.USERS_USECASES,
            { provide: 'UserRepository', useClass: user_repository_mongo_1.default },
        ],
        exports: [user_factory_1.default, ...users_1.USERS_USECASES],
    })
], ApplicationModule);
//# sourceMappingURL=application.module.js.map