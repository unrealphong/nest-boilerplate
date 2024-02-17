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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const openapi = require("@nestjs/swagger");
const _common_1 = require("../../common");
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const create_book_command_1 = require("./commands/create-book.command");
const get_all_book_paginated_command_1 = require("./commands/get-all-book-paginated.command");
const get_one_book_by_id_command_1 = require("./commands/get-one-book-by-id.command");
const remove_book_by_id_command_1 = require("./commands/remove-book-by-id.command");
const update_book_by_id_command_1 = require("./commands/update-book-by-id.command");
const create_book_dto_1 = require("./dto/create-book.dto");
const update_book_by_id_dto_1 = require("./dto/update-book-by-id.dto");
const book_entity_1 = require("./entities/book.entity");
let BookController = class BookController {
    constructor(commandBus) {
        this.commandBus = commandBus;
    }
    create(createBookDto) {
        return this.commandBus.execute(new create_book_command_1.CreateBookCommand({ data: createBookDto }));
    }
    getAll(query) {
        return this.commandBus.execute(new get_all_book_paginated_command_1.GetAllBookPaginatedCommand({ query }));
    }
    getOne(id) {
        return this.commandBus.execute(new get_one_book_by_id_command_1.GetOneBookByIdCommand({ id }));
    }
    update(id, updateBookDto) {
        return this.commandBus.execute(new update_book_by_id_command_1.UpdateBookByIdCommand({ id, data: updateBookDto }));
    }
    remove(id) {
        return this.commandBus.execute(new remove_book_by_id_command_1.RemoveBookByIdCommand({ id }));
    }
};
exports.BookController = BookController;
__decorate([
    (0, common_1.Post)(),
    (0, _common_1.ApiCreate)(book_entity_1.BookEntity, 'Book'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_book_dto_1.CreateBookDto]),
    __metadata("design:returntype", void 0)
], BookController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, _common_1.ApiGetAll)(book_entity_1.BookEntity, 'Book'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [_common_1.PaginationDto]),
    __metadata("design:returntype", void 0)
], BookController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, _common_1.ApiGetOne)(book_entity_1.BookEntity, 'Book'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BookController.prototype, "getOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, _common_1.ApiUpdate)(book_entity_1.BookEntity, 'Book'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_book_by_id_dto_1.UpdateBookByIdDto]),
    __metadata("design:returntype", void 0)
], BookController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, _common_1.ApiDelete)(book_entity_1.BookEntity, 'Book'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BookController.prototype, "remove", null);
exports.BookController = BookController = __decorate([
    (0, common_1.Controller)('book'),
    (0, _common_1.ApiController)('Book'),
    __metadata("design:paramtypes", [cqrs_1.CommandBus])
], BookController);
//# sourceMappingURL=book.controller.js.map