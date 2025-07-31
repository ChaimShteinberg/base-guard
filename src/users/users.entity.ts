import { Column, Model, Table } from "sequelize-typescript";
import { role } from "./enum/role.enum";

@Table
export class Users extends Model {
    @Column(({
        primaryKey: true, 
        autoIncrement: true,
    }))
    userId: number;

    @Column({
        unique: true
    })
    username: string;

    @Column
    hashPassword: string;

    @Column({
        defaultValue: role.soldier
    })
    role: role;
}