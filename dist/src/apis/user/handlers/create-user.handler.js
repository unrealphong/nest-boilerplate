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
var CreateUserHandler_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserHandler = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const create_user_command_1 = require("../commands/create-user.command");
const user_interface_1 = require("../user.interface");
let CreateUserHandler = CreateUserHandler_1 = class CreateUserHandler {
    constructor(userService) {
        this.userService = userService;
        this.logger = new common_1.Logger(CreateUserHandler_1.name);
    }
    async execute(command) {
        this.logger.debug('execute');
        const { data } = command;
        return this.userService.create(data);
    }
};
exports.CreateUserHandler = CreateUserHandler;
exports.CreateUserHandler = CreateUserHandler = CreateUserHandler_1 = __decorate([
    (0, cqrs_1.CommandHandler)(create_user_command_1.CreateUserCommand),
    __metadata("design:paramtypes", [user_interface_1.IUserService])
], CreateUserHandler);
//# sourceMappingURL=create-user.handler.js.map