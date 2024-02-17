"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheModule = void 0;
const constants_1 = require("../../common/constants");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const ioredis_1 = require("ioredis");
const cache_interface_1 = require("./cache.interface");
const cache_service_1 = require("./cache.service");
let CacheModule = class CacheModule {
};
exports.CacheModule = CacheModule;
exports.CacheModule = CacheModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [
            {
                provide: constants_1.MetadataKey.REDIS,
                useFactory(config) {
                    return new ioredis_1.default({
                        port: config.get('REDIS_PORT'),
                        host: config.get('REDIS_HOST'),
                        db: config.get('REDIS_DB'),
                        password: config.get('REDIS_PASSWORD'),
                        keyPrefix: config.get('REDIS_PREFIX')
                    });
                },
                inject: [config_1.ConfigService]
            },
            {
                provide: cache_interface_1.ICacheService,
                useClass: cache_service_1.CacheService
            }
        ],
        exports: [cache_interface_1.ICacheService]
    })
], CacheModule);
//# sourceMappingURL=cache.module.js.map