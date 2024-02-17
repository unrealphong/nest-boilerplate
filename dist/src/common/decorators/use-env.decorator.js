"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseEnv = void 0;
const _common_1 = require("..");
const common_1 = require("@nestjs/common");
const env_guard_1 = require("../guards/env.guard");
const UseEnv = (...env) => {
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)(_common_1.MetadataKey.ALLOWED_ENV, env), (0, common_1.UseGuards)(env_guard_1.EnvGuard));
};
exports.UseEnv = UseEnv;
//# sourceMappingURL=use-env.decorator.js.map