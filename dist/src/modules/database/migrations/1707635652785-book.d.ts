import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Book1707635652785 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
