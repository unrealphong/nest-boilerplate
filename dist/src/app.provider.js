"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.providers = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const nestjs_i18n_1 = require("nestjs-i18n");
const app_service_1 = require("./app.service");
const typeorm_filter_1 = require("./common/filters/typeorm.filter");
const format_response_interceptor_1 = require("./common/interceptors/format-response.interceptor");
exports.providers = [
    app_service_1.AppService,
    {
        provide: core_1.APP_PIPE,
        useFactory() {
            return new nestjs_i18n_1.I18nValidationPipe({ transform: true, whitelist: true });
        }
    },
    {
        provide: core_1.APP_INTERCEPTOR,
        useClass: common_1.ClassSerializerInterceptor
    },
    {
        provide: core_1.APP_INTERCEPTOR,
        useClass: format_response_interceptor_1.FormatResponseInterceptor
    },
    {
        provide: core_1.APP_FILTER,
        useClass: typeorm_filter_1.TypeOrmFilter
    },
    {
        provide: core_1.APP_FILTER,
        useFactory() {
            return new nestjs_i18n_1.I18nValidationExceptionFilter({
                errorFormatter(errors) {
                    return errors.map(({ property, constraints }) => {
                        const key = Object.keys(constraints || {})[0];
                        const error = constraints?.[key] || 'Invalid';
                        return {
                            property,
                            error
                        };
                    });
                },
                responseBodyFormatter(host, exc, formattedErrors) {
                    const response = exc.getResponse();
                    const status = exc.getStatus();
                    return {
                        status,
                        message: response,
                        errors: formattedErrors
                    };
                }
            });
        }
    }
];
//# sourceMappingURL=app.provider.js.map