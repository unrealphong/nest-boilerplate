import { IAuthService } from '@apis/auth/auth.interface';
import { Strategy } from 'passport-local';
declare const UserLocalStrategy_base: new (...args: any[]) => Strategy;
export declare class UserLocalStrategy extends UserLocalStrategy_base {
    private authService;
    constructor(authService: IAuthService);
    validate(username: string, password: string): Promise<import("@apis/auth/auth.interface").BaseAuthEntity>;
}
export {};
