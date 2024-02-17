import { UserEntity } from '@apis/user/entities/user.entity';
import { BaseEntity } from '@common';
export declare class BookEntity extends BaseEntity {
    name: string;
    userId: string;
    user?: UserEntity;
}
