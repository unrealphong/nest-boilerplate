import { PaginationDto } from '@common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserByIdDto } from './dto/update-user-by-id.dto';
export declare class UserController {
    private readonly commandBus;
    constructor(commandBus: CommandBus);
    create(createUserDto: CreateUserDto): Promise<any>;
    getAll(query: PaginationDto): Promise<any>;
    getOne(id: string): Promise<any>;
    update(id: string, updateUserDto: UpdateUserByIdDto): Promise<any>;
    remove(id: string): Promise<any>;
}
