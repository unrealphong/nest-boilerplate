"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSwagger = void 0;
const book_entity_1 = require("./apis/book/entities/book.entity");
const user_entity_1 = require("./apis/user/entities/user.entity");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const packageJson = require("../package.json");
function useSwagger(app) {
    const logger = new common_1.Logger('Swagger');
    const port = process.env.PORT || 3000;
    const path = 'docs';
    const title = 'NestJS Boilerplate';
    const version = packageJson.version;
    const description = packageJson.description;
    const config = new swagger_1.DocumentBuilder()
        .setTitle(title)
        .setDescription(description)
        .setVersion(version)
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config, {
        extraModels
    });
    swagger_1.SwaggerModule.setup(path, app, document, {
        swaggerOptions: {
            persistAuthorization: true,
            tagsSorter: 'alpha',
            operationsSorter: (a, b) => {
                const methodsOrder = ['get', 'post', 'put', 'patch', 'delete', 'options', 'trace'];
                let result = methodsOrder.indexOf(a.get('method')) - methodsOrder.indexOf(b.get('method'));
                if (result === 0) {
                    result = a.get('path').localeCompare(b.get('path'));
                }
                return result;
            }
        }
    });
    logger.log(`Your documentation is running on http://localhost:${port}/${path}`);
}
exports.useSwagger = useSwagger;
const extraModels = [user_entity_1.UserEntity, book_entity_1.BookEntity];
//# sourceMappingURL=app.swagger.js.map