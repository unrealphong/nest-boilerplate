"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CreateBookHandler_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBookHandler = void 0;
const user_interface_1 = require("../../user/user.interface");
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const book_interface_1 = require("../book.interface");
const create_book_command_1 = require("../commands/create-book.command");
let CreateBookHandler = CreateBookHandler_1 = class CreateBookHandler {
    constructor(bookService, userService) {
        this.bookService = bookService;
        this.userService = userService;
        this.logger = new common_1.Logger(CreateBookHandler_1.name);
    }
    async execute(command) {
        this.logger.debug('execute');
        const { data } = command;
        const { userId } = data;
        await this.userService.getOneByIdOrFail(userId);
        return this.bookService.create(data);
    }
};
exports.CreateBookHandler = CreateBookHandler;
exports.CreateBookHandler = CreateBookHandler = CreateBookHandler_1 = __decorate([
    (0, cqrs_1.CommandHandler)(create_book_command_1.CreateBookCommand),
    __metadata("design:paramtypes", [book_interface_1.IBookService,
        user_interface_1.IUserService])
], CreateBookHandler);
//# sourceMappingURL=create-book.handler.js.map