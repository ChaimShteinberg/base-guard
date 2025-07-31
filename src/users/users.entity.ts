import { Column, DataType, Model, Table } from "sequelize-typescript";
import { role } from "./enum/role.enum";

@Table
export class Users extends Model {
    @Column(({
        primaryKey: true, 
        autoIncrement: true,
    }))
    userId: number;

    @Column
    username: string;

    @Column
    hashPassword: string;

    @Column({
        defaultValue: role.soldier
    })
    role: role;
}