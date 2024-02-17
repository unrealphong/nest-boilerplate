"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenFromHeader = void 0;
const common_1 = require("@nestjs/common");
function getTokenFromHeader(headers) {
    const bearerToken = headers.authorization;
    if (!bearerToken) {
        throw new common_1.UnauthorizedException('Missing authorization');
    }
    const [prefix, accessToken] = bearerToken.split(' ');
    if (prefix.toLowerCase() !== 'bearer' || !accessToken) {
        throw new common_1.UnauthorizedException('access token malformed');
    }
    return accessToken;
}
exports.getTokenFromHeader = getTokenFromHeader;
//# sourceMappingURL=getTokenFromHeader.helper.js.map