import { ICommandHandler } from '@nestjs/cqrs';
import { GetAllUserPaginatedCommand } from '../commands/get-all-user-paginated.command';
import { IUserService } from '../user.interface';
export declare class GetAllUserPaginatedHandler implements ICommandHandler<GetAllUserPaginatedCommand> {
    private readonly userService;
    private logger;
    constructor(userService: IUserService);
    execute(command: GetAllUserPaginatedCommand): Promise<IPaginationResponse<import("../entities/user.entity").UserEntity>>;
}
