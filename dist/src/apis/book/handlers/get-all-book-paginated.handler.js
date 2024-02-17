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
var GetAllBookPaginatedHandler_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllBookPaginatedHandler = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const get_all_book_paginated_command_1 = require("../commands/get-all-book-paginated.command");
const book_interface_1 = require("../book.interface");
let GetAllBookPaginatedHandler = GetAllBookPaginatedHandler_1 = class GetAllBookPaginatedHandler {
    constructor(bookService) {
        this.bookService = bookService;
        this.logger = new common_1.Logger(GetAllBookPaginatedHandler_1.name);
    }
    async execute(command) {
        this.logger.log(command);
        const { query } = command;
        return this.bookService.getAllPaginated({
            ...query,
            relations: ['user']
        });
    }
};
exports.GetAllBookPaginatedHandler = GetAllBookPaginatedHandler;
exports.GetAllBookPaginatedHandler = GetAllBookPaginatedHandler = GetAllBookPaginatedHandler_1 = __decorate([
    (0, cqrs_1.CommandHandler)(get_all_book_paginated_command_1.GetAllBookPaginatedCommand),
    __metadata("design:paramtypes", [book_interface_1.IBookService])
], GetAllBookPaginatedHandler);
//# sourceMappingURL=get-all-book-paginated.handler.js.map