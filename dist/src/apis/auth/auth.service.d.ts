import { IUserService } from '@apis/user/user.interface';
import { BaseAuthService, IAuthService } from './auth.interface';
export declare class AuthService extends IAuthService {
    private readonly userService;
    constructor(userService: IUserService);
    getService(userType: UserType): BaseAuthService;
}
