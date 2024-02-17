import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { IUserService } from './user.interface';
export declare class UserService extends IUserService {
    private readonly userRepo;
    notFoundMessage: string;
    constructor(userRepo: Repository<UserEntity>);
    validateUserByUsernamePassword(username: string, password: string): Promise<UserEntity>;
    validateUserById(id: string): Promise<UserEntity>;
}
