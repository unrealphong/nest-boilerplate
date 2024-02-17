"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneHelper = void 0;
const max_1 = require("libphonenumber-js/max");
var PhoneNumberFormat;
(function (PhoneNumberFormat) {
    PhoneNumberFormat["NATIONAL"] = "NATIONAL";
    PhoneNumberFormat["E164"] = "E.164";
})(PhoneNumberFormat || (PhoneNumberFormat = {}));
var PhoneNumberType;
(function (PhoneNumberType) {
    PhoneNumberType["MOBILE"] = "MOBILE";
})(PhoneNumberType || (PhoneNumberType = {}));
class PhoneHelper {
    static parsePhoneNumber(phoneNumber, regionCode = 'VN') {
        return (0, max_1.parsePhoneNumber)(phoneNumber, regionCode);
    }
    static isPossiblePhoneNumber(phoneNumber, regionCode = 'VN') {
        return (0, max_1.isPossiblePhoneNumber)(phoneNumber, regionCode);
    }
    static isMobile(phoneNumber, regionCode = 'VN') {
        if (!PhoneHelper.isPossiblePhoneNumber(phoneNumber, regionCode))
            return false;
        if (PhoneHelper.parsePhoneNumber(phoneNumber, regionCode).getType() !==
            PhoneHelper.NumberType.MOBILE)
            return false;
        return true;
    }
    static getNumber(type, phoneNumber, regionCode = 'VN') {
        const phone = PhoneHelper.parsePhoneNumber(phoneNumber, regionCode);
        if (!phone)
            return null;
        switch (type) {
            case PhoneHelper.PhoneNumberFormat.E164:
                return phone.format(PhoneHelper.PhoneNumberFormat.E164);
            case PhoneHelper.PhoneNumberFormat.NATIONAL:
                return phone.format(PhoneHelper.PhoneNumberFormat.NATIONAL).replace(/ /g, '');
            default:
                return null;
        }
    }
}
exports.PhoneHelper = PhoneHelper;
PhoneHelper.PhoneNumberFormat = PhoneNumberFormat;
PhoneHelper.NumberType = PhoneNumberType;
//# sourceMappingURL=phone.helper.js.map