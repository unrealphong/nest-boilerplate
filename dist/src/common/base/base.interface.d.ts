import { BaseEntity } from '@common';
import { DeepPartial, DeleteResult, FindOptionsWhere, SelectQueryBuilder, UpdateResult } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
export declare abstract class AbstractBaseService<T extends BaseEntity> {
    abstract create(data: DeepPartial<T>): Promise<T>;
    abstract createMany(data: DeepPartial<T>[]): Promise<T[]>;
    abstract getOne(options: FindOptions<T>): Promise<T | null>;
    abstract getOneOrFail(options: FindOrFailOptions<T>): Promise<T>;
    abstract getOneById(id: string, options?: Partial<FindOptions<T>>): Promise<T | null>;
    abstract getOneByIdOrFail(id: string, options?: Partial<FindOrFailOptions<T>>): Promise<T>;
    abstract getAll(options?: Partial<FindOptions<T>>): Promise<T[]>;
    abstract getAllPaginated(options?: FindPaginatedOptions<T>): Promise<IPaginationResponse<T>>;
    abstract update(options: FindOrFailOptions<T>, data: QueryDeepPartialEntity<T>): Promise<T>;
    abstract updateById(id: string, data: QueryDeepPartialEntity<T>, options?: Partial<FindOrFailOptions<T>>): Promise<T>;
    abstract remove(options: FindOrFailOptions<T>): Promise<T>;
    abstract removeById(id: string, options?: Partial<FindOrFailOptions<T>>): Promise<T>;
    abstract removeAll(): Promise<DeleteResult>;
    abstract softRemove(options: FindOrFailOptions<T>): Promise<T>;
    abstract softRemoveById(id: string, options?: Partial<FindOrFailOptions<T>>): Promise<T>;
    abstract softRemoveAll(): Promise<DeleteResult>;
    abstract count(options: Partial<FindOptions<T>>): Promise<number>;
    abstract getQueryBuilder(alias?: string): SelectQueryBuilder<T>;
    abstract increment(where: FindOptionsWhere<T>, field: string, value: number): Promise<UpdateResult>;
    abstract decrement(where: FindOptionsWhere<T>, field: string, value: number): Promise<UpdateResult>;
    abstract getOneOrCreate(options: FindOptions<T>, data?: DeepPartial<T>): Promise<T>;
}
