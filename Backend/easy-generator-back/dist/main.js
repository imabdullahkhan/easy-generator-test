"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const http_exception_filter_1 = require("./infrastructure/exceptions/http-exception.filter");
const logger = new common_1.Logger('MAIN');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.useLogger(new common_1.Logger());
    app.enableCors({
        origin: ['*'],
        methods: ['*'],
        preflightContinue: false,
        optionsSuccessStatus: 204,
    });
    app.use('/api/healthz', (req, res) => {
        const message = 'healthz OK';
        logger.log(message);
        res.send(message);
    });
    app.useGlobalFilters(new http_exception_filter_1.default());
    await app.listen(app_module_1.AppModule.port);
}
bootstrap();
//# sourceMappingURL=main.js.map