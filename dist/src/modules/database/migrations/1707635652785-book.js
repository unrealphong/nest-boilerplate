"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book1707635652785 = void 0;
class Book1707635652785 {
    constructor() {
        this.name = 'Book1707635652785';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "book" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "isActive" boolean NOT NULL DEFAULT true, "name" character varying NOT NULL, "userId" uuid NOT NULL, CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "book" ADD CONSTRAINT "FK_04f66cf2a34f8efc5dcd9803693" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "book" DROP CONSTRAINT "FK_04f66cf2a34f8efc5dcd9803693"`);
        await queryRunner.query(`DROP TABLE "book"`);
    }
}
exports.Book1707635652785 = Book1707635652785;
//# sourceMappingURL=1707635652785-book.js.map