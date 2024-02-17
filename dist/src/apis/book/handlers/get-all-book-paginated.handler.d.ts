import { ICommandHandler } from '@nestjs/cqrs';
import { GetAllBookPaginatedCommand } from '../commands/get-all-book-paginated.command';
import { IBookService } from '../book.interface';
export declare class GetAllBookPaginatedHandler implements ICommandHandler<GetAllBookPaginatedCommand> {
    private readonly bookService;
    private logger;
    constructor(bookService: IBookService);
    execute(command: GetAllBookPaginatedCommand): Promise<IPaginationResponse<import("../entities/book.entity").BookEntity>>;
}
