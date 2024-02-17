import { CountryCode } from 'libphonenumber-js/max';
declare enum PhoneNumberFormat {
    NATIONAL = "NATIONAL",
    E164 = "E.164"
}
declare enum PhoneNumberType {
    MOBILE = "MOBILE"
}
export declare class PhoneHelper {
    static readonly PhoneNumberFormat: typeof PhoneNumberFormat;
    static readonly NumberType: typeof PhoneNumberType;
    private static parsePhoneNumber;
    private static isPossiblePhoneNumber;
    static isMobile(phoneNumber: string, regionCode?: CountryCode): boolean;
    static getNumber(type: PhoneNumberFormat, phoneNumber: string, regionCode?: string): string | null;
}
export {};
