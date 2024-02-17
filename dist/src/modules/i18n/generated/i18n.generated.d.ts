import { Path } from "nestjs-i18n";
export type I18nTranslations = {
    "validation": {
        "IS_STRING": string;
        "IS_NOT_EMPTY": string;
        "IS_NUMBER": string;
        "IS_EMAIL": string;
        "IS_NUMBER_STRING": string;
        "IS_DATE_STRING": string;
        "MIN": string;
        "MAX": string;
    };
};
export type I18nPath = Path<I18nTranslations>;
