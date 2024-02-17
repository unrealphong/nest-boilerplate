"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiController = exports.ApiHideController = exports.ApiLanguage = exports.ApiDelete = exports.ApiUpdate = exports.ApiGetOne = exports.ApiGetAll = exports.ApiCreate = exports.getPaginationSchema = exports.getBaseSchema = exports.getPaginationProperties = exports.getBaseProperties = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const language_enum_1 = require("../enums/language.enum");
const getBaseProperties = (status) => {
    return {
        status: { example: status },
        message: { example: 'success' }
    };
};
exports.getBaseProperties = getBaseProperties;
const getPaginationProperties = () => {
    return {
        pagination: {
            properties: {
                limit: { example: 10 },
                page: { example: 1 },
                total: { example: 10 }
            }
        }
    };
};
exports.getPaginationProperties = getPaginationProperties;
const getBaseSchema = ($ref, status = 200) => {
    return {
        properties: {
            ...(0, exports.getBaseProperties)(status),
            data: { $ref: (0, swagger_1.getSchemaPath)($ref) }
        }
    };
};
exports.getBaseSchema = getBaseSchema;
const getPaginationSchema = ($ref, status = 200) => {
    return {
        properties: {
            ...(0, exports.getBaseProperties)(status),
            data: {
                type: 'array',
                items: {
                    $ref: (0, swagger_1.getSchemaPath)($ref)
                }
            },
            ...(0, exports.getPaginationProperties)()
        }
    };
};
exports.getPaginationSchema = getPaginationSchema;
const ApiCreate = ($ref, name) => (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({ summary: 'Tạo mới một ' + name }), (0, swagger_1.ApiCreatedResponse)({
    description: 'Tạo mới một ' + name + ' thành công',
    schema: (0, exports.getBaseSchema)($ref, 201)
}), (0, swagger_1.ApiBadRequestResponse)({ description: 'Sai kiểu hoặc thiếu dữ liệu trong body' }), (0, swagger_1.ApiConflictResponse)({ description: 'Dữ liệu tạo bị trùng lặp (đã tạo rồi)' }));
exports.ApiCreate = ApiCreate;
const ApiGetAll = ($ref, name) => (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({ summary: 'Lấy danh sách các ' + name }), (0, swagger_1.ApiOkResponse)({
    description: 'Lấy danh sách các ' + name + ' thành công',
    schema: (0, exports.getPaginationSchema)($ref)
}));
exports.ApiGetAll = ApiGetAll;
const ApiGetOne = ($ref, name) => (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({ summary: 'Lấy chi tiết một ' + name }), (0, swagger_1.ApiOkResponse)({
    description: 'Lấy chi tiết một ' + name + ' thành công',
    schema: (0, exports.getBaseSchema)($ref)
}), (0, swagger_1.ApiNotFoundResponse)({ description: 'Không thể tìm thấy ' + name }));
exports.ApiGetOne = ApiGetOne;
const ApiUpdate = ($ref, name) => (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({ summary: 'Cập nhật một ' + name }), (0, swagger_1.ApiOkResponse)({
    description: 'Cập nhật một ' + name + ' thành công',
    schema: (0, exports.getBaseSchema)($ref)
}), (0, swagger_1.ApiBadRequestResponse)({ description: 'Sai kiểu hoặc thiếu dữ liệu trong body' }), (0, swagger_1.ApiNotFoundResponse)({ description: 'Không thể tìm thấy ' + name }));
exports.ApiUpdate = ApiUpdate;
const ApiDelete = ($ref, name) => (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({ summary: 'Xoá một ' + name }), (0, swagger_1.ApiOkResponse)({
    description: 'Xoá một ' + name + ' thành công',
    schema: (0, exports.getBaseSchema)($ref)
}), (0, swagger_1.ApiNotFoundResponse)({ description: 'Không thể tìm thấy ' + name }));
exports.ApiDelete = ApiDelete;
const ApiLanguage = () => (0, common_1.applyDecorators)((0, swagger_1.ApiHeader)({
    name: 'x-lang',
    description: 'Ngôn ngữ',
    enum: language_enum_1.Language,
    required: false
}));
exports.ApiLanguage = ApiLanguage;
const ApiHideController = () => (0, common_1.applyDecorators)((0, swagger_1.ApiExcludeController)(process.env.NODE_ENV === 'production'));
exports.ApiHideController = ApiHideController;
const ApiController = (name) => (0, common_1.applyDecorators)((0, exports.ApiHideController)(), (0, exports.ApiLanguage)(), (0, swagger_1.ApiTags)(`${name} API`));
exports.ApiController = ApiController;
//# sourceMappingURL=base.swagger.js.map