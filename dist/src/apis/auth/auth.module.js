"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const user_module_1 = require("../user/user.module");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const auth_controller_1 = require("./auth.controller");
const auth_interface_1 = require("./auth.interface");
const auth_service_1 = require("./auth.service");
const login_handler_1 = require("./handlers/login.handler");
const user_jwt_strategy_1 = require("./strategies/jwt/user.jwt.strategy");
const user_local_strategy_1 = require("./strategies/local/user.local.strategy");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [passport_1.PassportModule, user_module_1.UserModule],
        controllers: [auth_controller_1.AuthController],
        providers: [
            {
                provide: auth_interface_1.IAuthService,
                useClass: auth_service_1.AuthService
            },
            user_local_strategy_1.UserLocalStrategy,
            user_jwt_strategy_1.UserJwtStrategy,
            login_handler_1.LoginHandler
        ]
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map