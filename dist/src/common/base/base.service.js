"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const common_1 = require("@nestjs/common");
const lodash_1 = require("lodash");
const base_interface_1 = require("./base.interface");
class BaseService extends base_interface_1.AbstractBaseService {
    constructor(repository) {
        super();
        this.repository = repository;
    }
    create(data) {
        return this.repository.create(data).save();
    }
    async createMany(datas) {
        const entities = [];
        for (const data of datas) {
            const entity = await this.create(data);
            entities.push(entity);
        }
        return entities;
    }
    getOne(options) {
        const { relations, loadEagerRelations, order, withDeleted, select, where } = options;
        return this.repository.findOne({ where, relations, loadEagerRelations, order, withDeleted, select });
    }
    async getOneOrFail(options) {
        const errorMessage = options?.errorMessage || this.notFoundMessage;
        const where = options.where;
        const entity = await this.getOne({ ...options, where });
        if (!entity)
            throw new common_1.NotFoundException(errorMessage);
        return entity;
    }
    getOneById(id, options) {
        const where = { id };
        return this.getOne({ ...options, where });
    }
    async getOneByIdOrFail(id, options) {
        const errorMessage = options?.errorMessage || this.notFoundMessage;
        const entity = await this.getOneById(id, options);
        if (!entity)
            throw new common_1.NotFoundException(errorMessage);
        return entity;
    }
    async getOneOrCreate(options, data) {
        const entity = await this.getOne(options);
        if (!entity) {
            if (!data) {
                throw new common_1.InternalServerErrorException('Missing creation data');
            }
            return this.create(data);
        }
        return entity;
    }
    getAll(options) {
        const { relations, order, loadEagerRelations, withDeleted, select } = options;
        const where = options.where;
        return this.repository.find({
            where,
            relations,
            order,
            loadEagerRelations,
            withDeleted,
            select
        });
    }
    async getAllPaginated(options) {
        const { limit = 10, page = 1, where = { ...options.where, ...options.filter }, select, withDeleted, loadEagerRelations, order, relations } = options;
        const take = limit === -1 ? undefined : limit;
        const skip = limit === -1 ? undefined : limit * (+page - 1);
        const findAndCountOptions = { where, order, relations, take, skip, loadEagerRelations, withDeleted, select };
        const [data, total] = await this.repository.findAndCount(findAndCountOptions);
        return {
            data,
            pagination: {
                limit: limit === -1 ? total : limit,
                page: limit === -1 ? 1 : page,
                total
            }
        };
    }
    async update(options, data) {
        const entity = await this.getOneOrFail(options);
        const newEntity = (0, lodash_1.extend)(entity, data);
        return newEntity.save();
    }
    async updateById(id, data, options) {
        const entity = await this.getOneByIdOrFail(id, options);
        const newEntity = (0, lodash_1.extend)(entity, data);
        return newEntity.save();
    }
    async remove(options) {
        const entity = await this.getOneOrFail(options);
        return this.repository.remove(entity);
    }
    async removeById(id, options) {
        const entity = await this.getOneByIdOrFail(id, options);
        return this.repository.remove(entity);
    }
    removeAll() {
        return this.repository.delete({});
    }
    async softRemove(options) {
        const entity = await this.getOneOrFail(options);
        return this.repository.softRemove(entity);
    }
    async softRemoveById(id, options) {
        const entity = await this.getOneByIdOrFail(id, options);
        return this.repository.softRemove(entity);
    }
    softRemoveAll() {
        return this.repository.softDelete({});
    }
    count(options) {
        return this.repository.count(options);
    }
    getQueryBuilder(alias) {
        return this.repository.createQueryBuilder(alias);
    }
    increment(where, field, value) {
        return this.repository.increment(where, field, value);
    }
    decrement(where, field, value) {
        return this.repository.decrement(where, field, value);
    }
    query(queryString) {
        return this.repository.query(queryString);
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map