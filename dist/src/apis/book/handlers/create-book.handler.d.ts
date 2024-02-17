import { IUserService } from '@apis/user/user.interface';
import { ICommandHandler } from '@nestjs/cqrs';
import { IBookService } from '../book.interface';
import { CreateBookCommand } from '../commands/create-book.command';
export declare class CreateBookHandler implements ICommandHandler<CreateBookCommand> {
    private readonly bookService;
    private readonly userService;
    private logger;
    constructor(bookService: IBookService, userService: IUserService);
    execute(command: CreateBookCommand): Promise<import("../entities/book.entity").BookEntity>;
}
