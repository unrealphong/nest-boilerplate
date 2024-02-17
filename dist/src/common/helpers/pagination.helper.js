"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginationHelper = void 0;
function paginationHelper(array, paginationDto) {
    const limit = +(paginationDto.limit || 10);
    const page = +(paginationDto.page || 1);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    return {
        data: array.slice(startIndex, endIndex),
        pagination: {
            limit,
            page,
            total: array.length
        }
    };
}
exports.paginationHelper = paginationHelper;
//# sourceMappingURL=pagination.helper.js.map