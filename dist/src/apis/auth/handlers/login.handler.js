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
var LoginHandler_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginHandler = void 0;
const jwt_1 = require("../../../modules/jwt");
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const login_command_1 = require("../commands/login.command");
let LoginHandler = LoginHandler_1 = class LoginHandler {
    constructor(jwtService) {
        this.jwtService = jwtService;
        this.logger = new common_1.Logger(LoginHandler_1.name);
    }
    async execute(command) {
        this.logger.debug('execute');
        const { user } = command;
        const payload = {
            id: user.id
        };
        const expiresIn = Math.floor(Date.now() / 1000) + 60 * 60;
        const options = { expiresIn };
        const accessToken = await this.jwtService.sign(payload, options);
        return { accessToken, expiresIn };
    }
};
exports.LoginHandler = LoginHandler;
exports.LoginHandler = LoginHandler = LoginHandler_1 = __decorate([
    (0, cqrs_1.CommandHandler)(login_command_1.LoginCommand),
    __metadata("design:paramtypes", [jwt_1.IJwtService])
], LoginHandler);
//# sourceMappingURL=login.handler.js.map