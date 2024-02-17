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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const validation_decorator_1 = require("../decorators/validation.decorator");
class PaginationDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { limit: { required: false, type: () => Number }, page: { required: false, type: () => Number }, order: { required: false, type: () => Object }, filter: { required: false, type: () => Object }, search: { required: false, type: () => String } };
    }
}
exports.PaginationDto = PaginationDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, validation_decorator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => +(value || 10)),
    (0, swagger_1.ApiProperty)({ description: 'Số item mỗi trang', example: '10', type: 'string' }),
    __metadata("design:type", Number)
], PaginationDto.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, validation_decorator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => +(value || 10)),
    (0, swagger_1.ApiProperty)({ description: 'Số trang hiện tại', example: '1', type: 'string' }),
    __metadata("design:type", Number)
], PaginationDto.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => JSON.parse(value || '{}')),
    (0, swagger_1.ApiProperty)({
        description: 'Sort theo field',
        example: '{ "createdAt": "ASC" }',
        type: 'string'
    }),
    __metadata("design:type", Object)
], PaginationDto.prototype, "order", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => JSON.parse(value || '{}')),
    (0, swagger_1.ApiProperty)({
        description: 'Filter theo field',
        example: '{ "name": "string" }',
        type: 'string'
    }),
    __metadata("design:type", Object)
], PaginationDto.prototype, "filter", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: 'Tìm kiếm', example: '' }),
    __metadata("design:type", String)
], PaginationDto.prototype, "search", void 0);
//# sourceMappingURL=base.dto.js.map