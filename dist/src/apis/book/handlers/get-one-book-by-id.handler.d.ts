import { ICommandHandler } from '@nestjs/cqrs';
import { IBookService } from '../book.interface';
import { GetOneBookByIdCommand } from '../commands/get-one-book-by-id.command';
export declare class GetOneBookByIdHandler implements ICommandHandler<GetOneBookByIdCommand> {
    private readonly bookService;
    private logger;
    constructor(bookService: IBookService);
    execute(command: GetOneBookByIdCommand): Promise<import("../entities/book.entity").BookEntity>;
}
