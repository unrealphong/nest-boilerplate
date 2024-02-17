import { UserEntity } from '@apis/user/entities/user.entity';
import { CommandBus } from '@nestjs/cqrs';
import { LoginUserDto } from './dto/login-user.dto';
export declare class AuthController {
    private readonly commandBus;
    constructor(commandBus: CommandBus);
    loginUser(_loginUserDto: LoginUserDto, user: UserEntity): Promise<any>;
}
