import { Repository } from 'typeorm';
import { BookEntity } from './entities/book.entity';
import { IBookService } from './book.interface';
export declare class BookService extends IBookService {
    private readonly bookRepo;
    notFoundMessage: string;
    constructor(bookRepo: Repository<BookEntity>);
}
