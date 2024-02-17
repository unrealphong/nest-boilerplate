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
exports.UserController = void 0;
const openapi = require("@nestjs/swagger");
const _common_1 = require("../../common");
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const create_user_command_1 = require("./commands/create-user.command");
const get_all_user_paginated_command_1 = require("./commands/get-all-user-paginated.command");
const get_one_user_by_id_command_1 = require("./commands/get-one-user-by-id.command");
const remove_user_by_id_command_1 = require("./commands/remove-user-by-id.command");
const update_user_by_id_command_1 = require("./commands/update-user-by-id.command");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_by_id_dto_1 = require("./dto/update-user-by-id.dto");
const user_entity_1 = require("./entities/user.entity");
let UserController = class UserController {
    constructor(commandBus) {
        this.commandBus = commandBus;
    }
    create(createUserDto) {
        return this.commandBus.execute(new create_user_command_1.CreateUserCommand({ data: createUserDto }));
    }
    getAll(query) {
        return this.commandBus.execute(new get_all_user_paginated_command_1.GetAllUserPaginatedCommand({ query }));
    }
    getOne(id) {
        return this.commandBus.execute(new get_one_user_by_id_command_1.GetOneUserByIdCommand({ id }));
    }
    update(id, updateUserDto) {
        return this.commandBus.execute(new update_user_by_id_command_1.UpdateUserByIdCommand({ id, data: updateUserDto }));
    }
    remove(id) {
        return this.commandBus.execute(new remove_user_by_id_command_1.RemoveUserByIdCommand({ id }));
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)(),
    (0, _common_1.ApiCreate)(user_entity_1.UserEntity, 'User'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, _common_1.ApiGetAll)(user_entity_1.UserEntity, 'User'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [_common_1.PaginationDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, _common_1.ApiGetOne)(user_entity_1.UserEntity, 'User'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, _common_1.ApiUpdate)(user_entity_1.UserEntity, 'User'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_by_id_dto_1.UpdateUserByIdDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, _common_1.ApiDelete)(user_entity_1.UserEntity, 'User'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "remove", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    (0, _common_1.ApiController)('User'),
    __metadata("design:paramtypes", [cqrs_1.CommandBus])
], UserController);
//# sourceMappingURL=user.controller.js.map