"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const api_module_1 = require("./apis/api.module");
const _common_1 = require("./common");
const configs_1 = require("./modules/configs");
const cron_1 = require("./modules/cron");
const database_1 = require("./modules/database");
const i18n_1 = require("./modules/i18n");
const jwt_1 = require("./modules/jwt");
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const event_emitter_1 = require("@nestjs/event-emitter");
const app_controller_1 = require("./app.controller");
const app_provider_1 = require("./app.provider");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(_common_1.LoggerMiddleware).forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            configs_1.ConfigModule,
            cron_1.CronModule,
            database_1.DatabaseModule,
            jwt_1.JwtModule,
            event_emitter_1.EventEmitterModule.forRoot({
                maxListeners: 20
            }),
            i18n_1.I18NModule,
            cqrs_1.CqrsModule.forRoot(),
            api_module_1.ApiModule
        ],
        controllers: [app_controller_1.AppController],
        providers: app_provider_1.providers
    })
], AppModule);
//# sourceMappingURL=app.module.js.map