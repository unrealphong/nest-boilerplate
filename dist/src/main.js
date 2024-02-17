"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const app_swagger_1 = require("./app.swagger");
async function bootstrap() {
    const logger = new common_1.Logger('Bootstrap');
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ['error', 'debug', 'verbose']
    });
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('PORT') || 3000;
    const nodeEnv = configService.get('NODE_ENV');
    app.enableCors({
        origin: true,
        credentials: true
    });
    app.enableVersioning({
        type: common_1.VersioningType.URI,
        defaultVersion: '1'
    });
    (0, app_swagger_1.useSwagger)(app);
    await app.listen(port).then(async () => {
        const url = await app.getUrl();
        logger.debug(`Your app is running on port ${port}`);
        logger.debug(`Environment: ${nodeEnv}`);
        logger.debug(`Documentation ${url}/docs`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map