import { JwtSignOptions, JwtService as NestJwtService } from '@nestjs/jwt';
import { IJwtService } from './jwt.interface';
export declare class JwtService extends IJwtService {
    private readonly jwtService;
    private readonly SECRET_JWT;
    constructor(jwtService: NestJwtService);
    sign(payload: JwtPayload, options?: Omit<JwtSignOptions, 'secret'>): Promise<string>;
    verify(token: string): Promise<UserJwtPayload>;
}
