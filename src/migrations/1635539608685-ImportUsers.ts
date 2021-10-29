import {MigrationInterface, QueryRunner, TableIndex} from "typeorm";

export class ImportUsers1635539608685 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createIndex("users", new TableIndex({
            name: "john",
            columnNames: ["firstname"]
        }));

        await queryRunner.createIndex("users", new TableIndex({
            name: "doe",
            columnNames: ["lastname"]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
