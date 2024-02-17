import { ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../commands/create-user.command';
import { IUserService } from '../user.interface';
export declare class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
    private readonly userService;
    private logger;
    constructor(userService: IUserService);
    execute(command: CreateUserCommand): Promise<import("../entities/user.entity").UserEntity>;
}
