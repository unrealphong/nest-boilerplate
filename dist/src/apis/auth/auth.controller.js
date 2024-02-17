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
exports.AuthController = void 0;
const openapi = require("@nestjs/swagger");
const user_entity_1 = require("../user/entities/user.entity");
const _common_1 = require("../../common");
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const passport_1 = require("@nestjs/passport");
const auth_const_1 = require("./auth.const");
const auth_swagger_1 = require("./auth.swagger");
const login_command_1 = require("./commands/login.command");
const login_user_dto_1 = require("./dto/login-user.dto");
let AuthController = class AuthController {
    constructor(commandBus) {
        this.commandBus = commandBus;
    }
    loginUser(_loginUserDto, user) {
        return this.commandBus.execute(new login_command_1.LoginCommand({ user }));
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(auth_const_1.AuthStrategy.USER_LOCAL)),
    (0, common_1.Post)('user/login'),
    (0, common_1.HttpCode)(200),
    (0, auth_swagger_1.ApiLogin)('user'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, _common_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_dto_1.LoginUserDto, user_entity_1.UserEntity]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "loginUser", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    (0, _common_1.ApiController)('Auth'),
    __metadata("design:paramtypes", [cqrs_1.CommandBus])
], AuthController);
//# sourceMappingURL=auth.controller.js.map