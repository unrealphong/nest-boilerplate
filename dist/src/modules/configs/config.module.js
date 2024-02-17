"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const Joi = require("joi");
let ConfigModule = class ConfigModule {
};
exports.ConfigModule = ConfigModule;
exports.ConfigModule = ConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
                validationSchema: Joi.object({
                    NODE_ENV: Joi.string(),
                    PORT: Joi.number(),
                    DB_HOST: Joi.string(),
                    DB_PORT: Joi.number(),
                    DB_USERNAME: Joi.string().required(),
                    DB_PASSWORD: Joi.string().required().allow(''),
                    DB_NAME: Joi.string().required(),
                    DB_SCHEMA: Joi.string().required(),
                    SECRET_JWT: Joi.string().required(),
                    REDIS_HOST: Joi.string().default('localhost'),
                    REDIS_PORT: Joi.number().default(6379),
                    REDIS_DB: Joi.number().default(1),
                    REDIS_PASSWORD: Joi.string().required(),
                    REDIS_PREFIX: Joi.string().required(),
                    MAIL_HOST: Joi.string().required(),
                    MAIL_FROM: Joi.string().required(),
                    MAIL_USER: Joi.string().required(),
                    MAIL_PASS: Joi.string().required()
                })
            })
        ]
    })
], ConfigModule);
//# sourceMappingURL=config.module.js.map