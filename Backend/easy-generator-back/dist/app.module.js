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
var AppModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const domain_module_1 = require("./domain/domain.module");
const application_module_1 = require("./application/application.module");
const infrastructure_module_1 = require("./infrastructure/infrastructure.module");
const config_1 = require("@nestjs/config");
const config_var_1 = require("./config/config-var");
const env_enum_1 = require("./config/env.enum");
let AppModule = AppModule_1 = class AppModule {
    constructor(configService) {
        this.configService = configService;
        const logger = new common_1.Logger(AppModule_1.name);
        AppModule_1.port = configService.get(env_enum_1.Configuration.PORT);
        logger.log(`Configure on ENV: ${configService.get(env_enum_1.Configuration.NODE_ENV)}`);
        logger.verbose(`CONFIG_VAR: => ${JSON.stringify((0, config_var_1.configVar)())}`);
        logger.log(`Configure NODE PORT on ${configService.get(env_enum_1.Configuration.PORT)}`, AppModule_1.name);
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = AppModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `./environments/${process.env.NODE_ENV}.env`,
                load: [config_var_1.configVar],
            }),
            domain_module_1.DomainModule,
            application_module_1.ApplicationModule,
            infrastructure_module_1.InfrastructureModule,
        ],
        providers: [config_1.ConfigService],
    }),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AppModule);
//# sourceMappingURL=app.module.js.map