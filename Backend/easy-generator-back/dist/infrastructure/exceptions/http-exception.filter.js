"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const user_password_exception_1 = require("../../domain/exceptions/user.password.exception");
const email_exception_1 = require("../../domain/exceptions/email.exception");
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const { message, status } = this.isBusinessException(exception);
        response.status(status).json({
            message,
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
        });
    }
    isBusinessException(exception) {
        if (exception instanceof user_password_exception_1.default) {
            return {
                message: exception.message,
                status: 400,
            };
        }
        if (exception instanceof email_exception_1.default) {
            return {
                message: exception.message,
                status: 400,
            };
        }
        common_1.Logger.log(exception.stack);
        return {
            message: 'unknown',
            status: 500,
        };
    }
};
HttpExceptionFilter = __decorate([
    (0, common_1.Catch)()
], HttpExceptionFilter);
exports.default = HttpExceptionFilter;
//# sourceMappingURL=http-exception.filter.js.map