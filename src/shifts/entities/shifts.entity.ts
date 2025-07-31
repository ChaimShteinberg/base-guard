import { BelongsToMany, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Assignments } from "src/assignments/assignments.entity";
import { Users } from "src/users/users.entity";
import { ShiftSoldiers } from "./shift-soldiers.entity";
import { ShiftAssignments } from "./shift-assignments.entity";

@Table
export class Shifts extends Model {

    @Column({
        primaryKey: true,
        autoIncrement: true,
    })
    shiftId: number;

    @Column
    start_time: Date;

    @Column
    end_time: Date;

    @BelongsToMany(() => Users, () => ShiftSoldiers)
    soldiersId: Users[];

    @BelongsToMany(() => Assignments, () => ShiftAssignments)
    assignments: Assignments[];
}