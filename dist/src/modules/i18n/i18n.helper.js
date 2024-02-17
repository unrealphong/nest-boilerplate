"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translate = void 0;
const nestjs_i18n_1 = require("nestjs-i18n");
function translate(message) {
    return (0, nestjs_i18n_1.i18nValidationMessage)(message);
}
exports.translate = translate;
//# sourceMappingURL=i18n.helper.js.map