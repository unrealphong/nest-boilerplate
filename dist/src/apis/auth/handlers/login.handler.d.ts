import { IJwtService } from '@modules/jwt';
import { ICommandHandler } from '@nestjs/cqrs';
import { LoginCommand } from '../commands/login.command';
export declare class LoginHandler implements ICommandHandler<LoginCommand> {
    private readonly jwtService;
    private logger;
    constructor(jwtService: IJwtService);
    execute(command: LoginCommand): Promise<{
        accessToken: string;
        expiresIn: number;
    }>;
}
