import { PaginationDto } from '@common';
import { UserEntity } from '../entities/user.entity';
export declare class GetAllUserPaginatedCommand {
    query: PaginationDto<UserEntity>;
    constructor(data: GetAllUserPaginatedCommand);
}
