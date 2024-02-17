"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User1706412751363 = void 0;
const env_1 = require("../../configs/env");
class User1706412751363 {
    constructor() {
        this.name = 'User1706412751363';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "${env_1.schema}"."user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "isActive" boolean NOT NULL DEFAULT true, "username" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "${env_1.schema}"."user"`);
    }
}
exports.User1706412751363 = User1706412751363;
//# sourceMappingURL=1706412751363-user.js.map