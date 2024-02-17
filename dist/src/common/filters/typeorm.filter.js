"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmFilter = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let TypeOrmFilter = class TypeOrmFilter {
    constructor() {
        this.logger = new common_1.Logger('TypeORMError');
    }
    catch(exception, host) {
        const response = host.switchToHttp().getResponse();
        let message = exception.message;
        const code = exception.code;
        if (code === '23505') {
            message = 'Dữ liệu bị trùng lặp';
        }
        const customResponse = {
            status: 500,
            message: 'Internal Server Error',
            errors: [{ code: code, message: message }]
        };
        this.logger.error(JSON.stringify(exception));
        response.status(customResponse.status).json(customResponse);
    }
};
exports.TypeOrmFilter = TypeOrmFilter;
exports.TypeOrmFilter = TypeOrmFilter = __decorate([
    (0, common_1.Catch)(typeorm_1.TypeORMError)
], TypeOrmFilter);
//# sourceMappingURL=typeorm.filter.js.map