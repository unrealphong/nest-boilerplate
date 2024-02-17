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
var RemoveUserByIdHandler_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveUserByIdHandler = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const remove_user_by_id_command_1 = require("../commands/remove-user-by-id.command");
const user_interface_1 = require("../user.interface");
let RemoveUserByIdHandler = RemoveUserByIdHandler_1 = class RemoveUserByIdHandler {
    constructor(userService) {
        this.userService = userService;
        this.logger = new common_1.Logger(RemoveUserByIdHandler_1.name);
    }
    async execute(command) {
        this.logger.log(command);
        const { id } = command;
        return this.userService.softRemoveById(id);
    }
};
exports.RemoveUserByIdHandler = RemoveUserByIdHandler;
exports.RemoveUserByIdHandler = RemoveUserByIdHandler = RemoveUserByIdHandler_1 = __decorate([
    (0, cqrs_1.CommandHandler)(remove_user_by_id_command_1.RemoveUserByIdCommand),
    __metadata("design:paramtypes", [user_interface_1.IUserService])
], RemoveUserByIdHandler);
//# sourceMappingURL=remove-user-by-id.handler.js.map