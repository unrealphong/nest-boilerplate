"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const uuid_1 = require("uuid");
exports.UserService = jest.fn().mockReturnValue({
    create: jest.fn((dto) => ({
        id: (0, uuid_1.v4)(),
        username: dto.username,
        password: dto.password,
        createdAt: new Date(),
        updatedAt: new Date()
    })),
    getAllPaginated: jest.fn((query) => {
        const data = [
            {
                id: (0, uuid_1.v4)(),
                username: 'user1',
                password: 'password1',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: (0, uuid_1.v4)(),
                username: 'user2',
                password: 'password2',
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
        username: 'username',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
    })),
    softRemoveById: jest.fn((id) => ({
        id,
        username: 'username',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
    })),
    updateById: jest.fn((id, data) => ({
        ...data,
        id,
        createdAt: new Date(),
        updatedAt: new Date()
    })),
    validateUserByUsernamePassword: jest.fn((username, password) => ({
        id: (0, uuid_1.v4)(),
        username,
        password,
        createdAt: new Date(),
        updatedAt: new Date()
    })),
    validateUserById: jest.fn((id) => ({
        id,
        username: 'username',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
    }))
});
//# sourceMappingURL=user.service.js.map