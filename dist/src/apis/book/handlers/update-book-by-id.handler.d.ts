import { IUserService } from '@apis/user/user.interface';
import { ICommandHandler } from '@nestjs/cqrs';
import { IBookService } from '../book.interface';
import { UpdateBookByIdCommand } from '../commands/update-book-by-id.command';
export declare class UpdateBookByIdHandler implements ICommandHandler<UpdateBookByIdCommand> {
    private readonly bookService;
    private readonly userService;
    private logger;
    constructor(bookService: IBookService, userService: IUserService);
    execute(command: UpdateBookByIdCommand): Promise<import("../entities/book.entity").BookEntity>;
}
