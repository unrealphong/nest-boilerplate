"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = exports.adminPassword = exports.adminUsername = void 0;
const config_1 = require("@nestjs/config");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const configService = new config_1.ConfigService();
exports.adminUsername = configService.get('ADMIN_USERNAME');
exports.adminPassword = configService.get('ADMIN_PASSWORD');
exports.schema = configService.get('DB_SCHEMA');
//# sourceMappingURL=env.js.map