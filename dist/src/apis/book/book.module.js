"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModule = void 0;
const user_module_1 = require("../user/user.module");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const book_controller_1 = require("./book.controller");
const book_interface_1 = require("./book.interface");
const book_service_1 = require("./book.service");
const book_entity_1 = require("./entities/book.entity");
const create_book_handler_1 = require("./handlers/create-book.handler");
const get_all_book_paginated_handler_1 = require("./handlers/get-all-book-paginated.handler");
const get_one_book_by_id_handler_1 = require("./handlers/get-one-book-by-id.handler");
const remove_book_by_id_handler_1 = require("./handlers/remove-book-by-id.handler");
const update_book_by_id_handler_1 = require("./handlers/update-book-by-id.handler");
let BookModule = class BookModule {
};
exports.BookModule = BookModule;
exports.BookModule = BookModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([book_entity_1.BookEntity]), user_module_1.UserModule],
        controllers: [book_controller_1.BookController],
        providers: [
            {
                provide: book_interface_1.IBookService,
                useClass: book_service_1.BookService
            },
            create_book_handler_1.CreateBookHandler,
            get_all_book_paginated_handler_1.GetAllBookPaginatedHandler,
            get_one_book_by_id_handler_1.GetOneBookByIdHandler,
            remove_book_by_id_handler_1.RemoveBookByIdHandler,
            update_book_by_id_handler_1.UpdateBookByIdHandler
        ],
        exports: [book_interface_1.IBookService]
    })
], BookModule);
//# sourceMappingURL=book.module.js.map