import { ICommandHandler } from '@nestjs/cqrs';
import { RemoveBookByIdCommand } from '../commands/remove-book-by-id.command';
import { IBookService } from '../book.interface';
export declare class RemoveBookByIdHandler implements ICommandHandler<RemoveBookByIdCommand> {
    private readonly bookService;
    private logger;
    constructor(bookService: IBookService);
    execute(command: RemoveBookByIdCommand): Promise<import("../entities/book.entity").BookEntity>;
}
