"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtService = void 0;
exports.JwtService = jest.fn().mockReturnValue({
    sign: async (_payload, _options) => 'accessToken'
});
//# sourceMappingURL=jwt.service.js.map