import { UpdateUserByIdDto } from '../dto/update-user-by-id.dto';
export declare class UpdateUserByIdCommand {
    id: string;
    data: UpdateUserByIdDto;
    constructor(data: UpdateUserByIdCommand);
}
