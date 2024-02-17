"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBookByIdDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_book_dto_1 = require("./create-book.dto");
class UpdateBookByIdDto extends (0, swagger_1.PartialType)(create_book_dto_1.CreateBookDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateBookByIdDto = UpdateBookByIdDto;
//# sourceMappingURL=update-book-by-id.dto.js.map