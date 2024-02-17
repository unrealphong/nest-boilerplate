import { ICommandHandler } from '@nestjs/cqrs';
import { RemoveUserByIdCommand } from '../commands/remove-user-by-id.command';
import { IUserService } from '../user.interface';
export declare class RemoveUserByIdHandler implements ICommandHandler<RemoveUserByIdCommand> {
    private readonly userService;
    private logger;
    constructor(userService: IUserService);
    execute(command: RemoveUserByIdCommand): Promise<import("../entities/user.entity").UserEntity>;
}
