import { JwtSignOptions } from "@nestjs/jwt";
export declare abstract class IJwtService {
    abstract sign(payload: JwtPayload, options?: Omit<JwtSignOptions, 'secret'>): Promise<string>;
    abstract verify(token: string): Promise<JwtPayload>;
}
