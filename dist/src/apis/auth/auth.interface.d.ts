import { BaseEntity } from "@common";
export declare abstract class IAuthService {
    abstract getService(userType: UserType): BaseAuthService;
}
export interface BaseAuthService {
    validateUserByUsernamePassword(username: string, password: string): Promise<BaseAuthEntity>;
    validateUserById(id: string): Promise<BaseAuthEntity>;
}
export declare class BaseAuthEntity extends BaseEntity {
    username: string;
    password: string;
}
