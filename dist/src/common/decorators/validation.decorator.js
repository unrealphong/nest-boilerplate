"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Max = exports.Min = exports.IsDateString = exports.IsNumberString = exports.IsNumber = exports.IsEmail = exports.IsNotEmpty = exports.IsString = void 0;
const i18n_helper_1 = require("../../modules/i18n/i18n.helper");
const common_1 = require("@nestjs/common");
const validator = require("class-validator");
const IsString = (validationOptions) => (0, common_1.applyDecorators)(validator.IsString({ ...validationOptions, message: (0, i18n_helper_1.translate)('validation.IS_STRING') }));
exports.IsString = IsString;
const IsNotEmpty = (validationOptions) => (0, common_1.applyDecorators)(validator.IsNotEmpty({
    ...validationOptions,
    message: (0, i18n_helper_1.translate)('validation.IS_NOT_EMPTY')
}));
exports.IsNotEmpty = IsNotEmpty;
const IsEmail = (validationOptions) => (0, common_1.applyDecorators)(validator.IsEmail({}, { ...validationOptions, message: (0, i18n_helper_1.translate)('validation.IS_EMAIL') }));
exports.IsEmail = IsEmail;
const IsNumber = (options, validationOptions) => (0, common_1.applyDecorators)(validator.IsNumber(options, {
    ...validationOptions,
    message: (0, i18n_helper_1.translate)('validation.IS_NUMBER')
}));
exports.IsNumber = IsNumber;
const IsNumberString = (validationOptions) => (0, common_1.applyDecorators)(validator.IsNumberString({}, {
    ...validationOptions,
    message: (0, i18n_helper_1.translate)('validation.IS_NUMBER_STRING')
}));
exports.IsNumberString = IsNumberString;
const IsDateString = (validationOptions) => (0, common_1.applyDecorators)(validator.IsDateString({}, {
    ...validationOptions,
    message: (0, i18n_helper_1.translate)('validation.IS_DATE_STRING')
}));
exports.IsDateString = IsDateString;
const Min = (minValue, validationOptions) => (0, common_1.applyDecorators)(validator.Min(minValue, {
    ...validationOptions,
    message: (0, i18n_helper_1.translate)('validation.MIN')
}));
exports.Min = Min;
const Max = (maxValue, validationOptions) => (0, common_1.applyDecorators)(validator.Max(maxValue, {
    ...validationOptions,
    message: (0, i18n_helper_1.translate)('validation.MAX')
}));
exports.Max = Max;
//# sourceMappingURL=validation.decorator.js.map