"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailModule = void 0;
const _common_1 = require("../../common");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nodemailer_1 = require("nodemailer");
const mail_interface_1 = require("./mail.interface");
const mail_service_1 = require("./mail.service");
let MailModule = class MailModule {
};
exports.MailModule = MailModule;
exports.MailModule = MailModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [
            {
                provide: mail_interface_1.IMailService,
                useClass: mail_service_1.MailService
            },
            {
                provide: _common_1.MetadataKey.NODEMAILER,
                inject: [config_1.ConfigService],
                useFactory(configService) {
                    return (0, nodemailer_1.createTransport)({
                        host: configService.get('MAIL_HOST'),
                        from: configService.get('MAIL_FROM'),
                        secure: true,
                        auth: {
                            user: configService.get('MAIL_USER'),
                            pass: configService.get('MAIL_PASS')
                        }
                    });
                }
            }
        ],
        exports: [mail_interface_1.IMailService]
    })
], MailModule);
//# sourceMappingURL=mail.module.js.map