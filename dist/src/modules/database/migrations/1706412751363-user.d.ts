import { MigrationInterface, QueryRunner } from "typeorm";
export declare class User1706412751363 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
