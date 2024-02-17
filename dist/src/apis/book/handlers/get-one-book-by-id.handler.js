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
var GetOneBookByIdHandler_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOneBookByIdHandler = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const book_interface_1 = require("../book.interface");
const get_one_book_by_id_command_1 = require("../commands/get-one-book-by-id.command");
let GetOneBookByIdHandler = GetOneBookByIdHandler_1 = class GetOneBookByIdHandler {
    constructor(bookService) {
        this.bookService = bookService;
        this.logger = new common_1.Logger(GetOneBookByIdHandler_1.name);
    }
    async execute(command) {
        this.logger.log(command);
        const { id } = command;
        return this.bookService.getOneByIdOrFail(id, { relations: ['user'] });
    }
};
exports.GetOneBookByIdHandler = GetOneBookByIdHandler;
exports.GetOneBookByIdHandler = GetOneBookByIdHandler = GetOneBookByIdHandler_1 = __decorate([
    (0, cqrs_1.CommandHandler)(get_one_book_by_id_command_1.GetOneBookByIdCommand),
    __metadata("design:paramtypes", [book_interface_1.IBookService])
], GetOneBookByIdHandler);
//# sourceMappingURL=get-one-book-by-id.handler.js.map