"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerMiddleware = void 0;
const common_1 = require("@nestjs/common");
const lodash_1 = require("lodash");
let LoggerMiddleware = class LoggerMiddleware {
    constructor() {
        this.logger = new common_1.Logger('HTTP');
    }
    use(req, res, next) {
        this.logger.verbose('--------------------------------------------------------------------');
        const { method, body, query, headers } = req;
        const originalUrl = req.originalUrl.replace(/\?.*$/, '');
        const ip = headers['x-forwarded-for'];
        const host = headers['host'];
        const begin = Date.now();
        this.logger.verbose(`[${method}] - ${host} - ${originalUrl} - ${ip}`);
        if (!(0, lodash_1.isEmpty)(query)) {
            this.logger.verbose(`[query] - ${JSON.stringify(query)}`);
        }
        if (method === 'POST' || method === 'PATCH' || method === 'PUT') {
            this.logger.verbose(`[body] - ${JSON.stringify(body)}`);
        }
        res.on('finish', () => {
            const end = Date.now();
            let timeSpent = end - begin;
            let unitTime = 'ms';
            if (timeSpent >= 1000) {
                timeSpent = timeSpent / 1000;
                unitTime = 's';
            }
            const { statusCode, statusMessage } = res;
            const logMessage = `[${statusCode}] - ${statusMessage} - ${timeSpent}${unitTime}`;
            if (statusCode === 200 || statusCode === 201) {
                this.logger.verbose(logMessage);
            }
            else {
                this.logger.error(logMessage);
            }
        });
        next();
    }
};
exports.LoggerMiddleware = LoggerMiddleware;
exports.LoggerMiddleware = LoggerMiddleware = __decorate([
    (0, common_1.Injectable)()
], LoggerMiddleware);
//# sourceMappingURL=logger.middleware.js.map