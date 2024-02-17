import { UpdateBookByIdDto } from '../dto/update-book-by-id.dto';
export declare class UpdateBookByIdCommand {
    id: string;
    data: UpdateBookByIdDto;
    constructor(data: UpdateBookByIdCommand);
}
