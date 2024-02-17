"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiLogin = void 0;
const _common_1 = require("../../common");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ApiLogin = (userType) => (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({ summary: `Đăng nhập ${userType}` }), (0, swagger_1.ApiOkResponse)({
    schema: {
        properties: {
            ...(0, _common_1.getBaseProperties)(200),
            data: {
                properties: {
                    accessToken: { example: 'string' },
                    expiresIn: { example: 12345678 }
                }
            }
        }
    }
}));
exports.ApiLogin = ApiLogin;
//# sourceMappingURL=auth.swagger.js.map