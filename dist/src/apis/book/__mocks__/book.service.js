"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const uuid_1 = require("uuid");
exports.BookService = jest.fn().mockReturnValue({
    create: jest.fn((dto) => ({
        id: (0, uuid_1.v4)(),
        createdAt: new Date(),
        updatedAt: new Date()
    })),
    getAllPaginated: jest.fn((query) => {
        const data = [
            {
                id: (0, uuid_1.v4)(),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: (0, uuid_1.v4)(),
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ];
        const limit = +(query.limit || 10);
        const page = +(query.page || 10);
        const offset = limit * (page - 1);
        const total = data.length;
        return {
            data: data.slice(offset, limit * page),
            pagination: {
                limit,
                page,
                total
            }
        };
    }),
    getOneByIdOrFail: jest.fn((id) => ({
        id,
        createdAt: new Date(),
        updatedAt: new Date()
    })),
    softRemoveById: jest.fn((id) => ({
        id,
        createdAt: new Date(),
        updatedAt: new Date()
    })),
    updateById: jest.fn((id, data) => ({
        ...data,
        id,
        createdAt: new Date(),
        updatedAt: new Date()
    }))
});
//# sourceMappingURL=book.service.js.map