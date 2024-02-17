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
exports.BookEntity = void 0;
const openapi = require("@nestjs/swagger");
const user_entity_1 = require("../../user/entities/user.entity");
const _common_1 = require("../../../common");
const typeorm_1 = require("typeorm");
let BookEntity = class BookEntity extends _common_1.BaseEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, userId: { required: true, type: () => String }, user: { required: false, type: () => require("../../user/entities/user.entity").UserEntity } };
    }
};
exports.BookEntity = BookEntity;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BookEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BookEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity),
    __metadata("design:type", user_entity_1.UserEntity)
], BookEntity.prototype, "user", void 0);
exports.BookEntity = BookEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'book' })
], BookEntity);
//# sourceMappingURL=book.entity.js.map