"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
exports.MailService = jest.fn().mockReturnValue({
    sendOTP: jest.fn((_payload) => Promise.resolve('success'))
});
//# sourceMappingURL=mail.service.js.map