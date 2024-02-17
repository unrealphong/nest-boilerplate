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
exports.UserLocalStrategy = void 0;
const auth_const_1 = require("../../auth.const");
const auth_interface_1 = require("../../auth.interface");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_local_1 = require("passport-local");
let UserLocalStrategy = class UserLocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy, auth_const_1.AuthStrategy.USER_LOCAL) {
    constructor(authService) {
        super({
            usernameField: 'username',
            passwordField: 'password'
        });
        this.authService = authService;
    }
    async validate(username, password) {
        const service = this.authService.getService('user');
        return service.validateUserByUsernamePassword(username, password);
    }
};
exports.UserLocalStrategy = UserLocalStrategy;
exports.UserLocalStrategy = UserLocalStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_interface_1.IAuthService])
], UserLocalStrategy);
//# sourceMappingURL=user.local.strategy.js.map