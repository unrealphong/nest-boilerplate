import { BaseEntity as TypeormBaseEntity } from 'typeorm';
export declare class BaseEntity extends TypeormBaseEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date | null;
    isActive: boolean;
}
