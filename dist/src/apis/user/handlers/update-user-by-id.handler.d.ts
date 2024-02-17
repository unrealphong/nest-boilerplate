import { ICommandHandler } from '@nestjs/cqrs';
import { UpdateUserByIdCommand } from '../commands/update-user-by-id.command';
import { IUserService } from '../user.interface';
export declare class UpdateUserByIdHandler implements ICommandHandler<UpdateUserByIdCommand> {
    private readonly userService;
    private logger;
    constructor(userService: IUserService);
    execute(command: UpdateUserByIdCommand): Promise<import("../entities/user.entity").UserEntity>;
}
