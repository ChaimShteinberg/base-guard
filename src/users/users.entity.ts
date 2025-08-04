import { AutoIncrement, Column, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import { role } from "./enum/role.enum";

@Table
export class Users extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    userId: number;

    @Unique
    @Column
    username: string;

    @Column
    hashPassword: string;

    @Column({
        defaultValue: role.soldier
    })
    role: role;
}