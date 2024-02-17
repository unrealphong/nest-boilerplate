import { ICommandHandler } from '@nestjs/cqrs';
import { GetOneUserByIdCommand } from '../commands/get-one-user-by-id.command';
import { IUserService } from '../user.interface';
export declare class GetOneUserByIdHandler implements ICommandHandler<GetOneUserByIdCommand> {
    private readonly userService;
    private logger;
    constructor(userService: IUserService);
    execute(command: GetOneUserByIdCommand): Promise<import("../entities/user.entity").UserEntity>;
}
