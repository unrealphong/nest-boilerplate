"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const create_user_handler_1 = require("./handlers/create-user.handler");
const get_all_user_paginated_handler_1 = require("./handlers/get-all-user-paginated.handler");
const get_one_user_by_id_handler_1 = require("./handlers/get-one-user-by-id.handler");
const remove_user_by_id_handler_1 = require("./handlers/remove-user-by-id.handler");
const update_user_by_id_handler_1 = require("./handlers/update-user-by-id.handler");
const user_controller_1 = require("./user.controller");
const user_interface_1 = require("./user.interface");
const user_service_1 = require("./user.service");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity])],
        controllers: [user_controller_1.UserController],
        providers: [
            {
                provide: user_interface_1.IUserService,
                useClass: user_service_1.UserService
            },
            create_user_handler_1.CreateUserHandler,
            get_all_user_paginated_handler_1.GetAllUserPaginatedHandler,
            get_one_user_by_id_handler_1.GetOneUserByIdHandler,
            remove_user_by_id_handler_1.RemoveUserByIdHandler,
            update_user_by_id_handler_1.UpdateUserByIdHandler
        ],
        exports: [user_interface_1.IUserService]
    })
], UserModule);
//# sourceMappingURL=user.module.js.map