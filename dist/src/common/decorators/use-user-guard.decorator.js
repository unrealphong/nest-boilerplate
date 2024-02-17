"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseUserGuard = void 0;
const auth_const_1 = require("../../apis/auth/auth.const");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const UseUserGuard = () => (0, common_1.applyDecorators)((0, common_1.UseGuards)((0, passport_1.AuthGuard)(auth_const_1.AuthStrategy.USER_JWT)), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Thiếu hoặc sai token' }));
exports.UseUserGuard = UseUserGuard;
//# sourceMappingURL=use-user-guard.decorator.js.map