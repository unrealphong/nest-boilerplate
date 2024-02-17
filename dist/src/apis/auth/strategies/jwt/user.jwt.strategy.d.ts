import { IAuthService } from '@apis/auth/auth.interface';
import { Strategy } from 'passport-jwt';
declare const UserJwtStrategy_base: new (...args: any[]) => Strategy;
export declare class UserJwtStrategy extends UserJwtStrategy_base {
    private readonly authService;
    constructor(authService: IAuthService);
    validate(payload: UserJwtPayload): Promise<import("@apis/auth/auth.interface").BaseAuthEntity>;
}
export {};
