import { BaseEntity } from '@common';
import { FindOptionsOrder, FindOptionsWhere } from 'typeorm';
export declare class PaginationDto<T = BaseEntity> {
    limit?: number;
    page?: number;
    order?: FindOptionsOrder<T>;
    filter?: FindOptionsWhere<T> | FindOptionsWhere<T>[];
    search?: string;
}
