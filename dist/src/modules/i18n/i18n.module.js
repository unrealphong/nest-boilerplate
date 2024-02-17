"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18NModule = void 0;
const _common_1 = require("../../common");
const common_1 = require("@nestjs/common");
const nestjs_i18n_1 = require("nestjs-i18n");
const path_1 = require("path");
let I18NModule = class I18NModule {
};
exports.I18NModule = I18NModule;
exports.I18NModule = I18NModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_i18n_1.I18nModule.forRoot({
                fallbackLanguage: _common_1.Language.VI,
                loaderOptions: {
                    path: (0, path_1.join)(__dirname, '/translations/'),
                    watch: true
                },
                resolvers: [new nestjs_i18n_1.HeaderResolver(['x-lang'])],
                typesOutputPath: (0, path_1.join)(__dirname, '/../../../../src/modules/i18n/generated/i18n.generated.ts')
            })
        ]
    })
], I18NModule);
//# sourceMappingURL=i18n.module.js.map