import { MigrationInterface, QueryRunner } from "typeorm";

export class registerUser1665986967804 implements MigrationInterface {
    name = 'registerUser1665986967804'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users_database" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "email" character varying(100) NOT NULL, "password" character varying(120) NOT NULL, "isActive" boolean NOT NULL, "isAdm" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_35852d70e433073812c5b8cc4c9" UNIQUE ("email"), CONSTRAINT "PK_0b1fcfcec60981758c4e2150509" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users_database"`);
    }

}
