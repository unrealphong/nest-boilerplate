import { BaseEntity } from '@common';
export declare class UserEntity extends BaseEntity {
    username: string;
    password: string;
    beforeInsert(): Promise<void>;
}
