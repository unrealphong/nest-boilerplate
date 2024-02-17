import { PaginationDto } from '@common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookByIdDto } from './dto/update-book-by-id.dto';
export declare class BookController {
    private readonly commandBus;
    constructor(commandBus: CommandBus);
    create(createBookDto: CreateBookDto): Promise<any>;
    getAll(query: PaginationDto): Promise<any>;
    getOne(id: string): Promise<any>;
    update(id: string, updateBookDto: UpdateBookByIdDto): Promise<any>;
    remove(id: string): Promise<any>;
}
