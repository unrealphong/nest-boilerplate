"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheService = void 0;
const constants_1 = require("../../common/constants");
const common_1 = require("@nestjs/common");
const ioredis_1 = require("ioredis");
const cache_interface_1 = require("./cache.interface");
let CacheService = class CacheService extends cache_interface_1.ICacheService {
    constructor(redis) {
        super();
        this.redis = redis;
    }
    async set(key, value, expired) {
        await this.del(key);
        return this.redis.set(key, value, 'EX', expired);
    }
    async setNx(key, value) {
        await this.del(key);
        return this.redis.setnx(key, value);
    }
    get(key) {
        return this.redis.get(key);
    }
    del(key) {
        return this.redis.del(key);
    }
    keys(prefix) {
        return this.redis.keys(`${prefix}:*`);
    }
};
exports.CacheService = CacheService;
exports.CacheService = CacheService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.MetadataKey.REDIS)),
    __metadata("design:paramtypes", [ioredis_1.default])
], CacheService);
//# sourceMappingURL=cache.service.js.map