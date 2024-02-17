"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationHelper = void 0;
class ValidationHelper {
    static isUuid(value) {
        const uuidPattern = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
        return uuidPattern.test(value);
    }
}
exports.ValidationHelper = ValidationHelper;
//# sourceMappingURL=validation.helper.js.map