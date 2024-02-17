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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const _common_1 = require("../../common");
const common_1 = require("@nestjs/common");
const nodemailer_1 = require("nodemailer");
const mail_helper_1 = require("./mail.helper");
const mail_interface_1 = require("./mail.interface");
let MailService = class MailService extends mail_interface_1.IMailService {
    constructor(transporter) {
        super();
        this.transporter = transporter;
    }
    async sendMail(payload) {
        return this.transporter.sendMail(payload);
    }
    async sendOTP(payload) {
        const template = (0, mail_helper_1.getOtpTemplate)(payload);
        return this.sendMail({
            ...payload,
            subject: 'Forgot password',
            html: template
        });
    }
};
exports.MailService = MailService;
exports.MailService = MailService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(_common_1.MetadataKey.NODEMAILER)),
    __metadata("design:paramtypes", [typeof (_a = typeof nodemailer_1.Transporter !== "undefined" && nodemailer_1.Transporter) === "function" ? _a : Object])
], MailService);
//# sourceMappingURL=mail.service.js.map