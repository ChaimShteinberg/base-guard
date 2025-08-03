import { Column, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Shifts } from "./shifts.entity";
import { Assignments } from "src/assignments/assignments.entity";

@Table({
    timestamps: false
})
export class ShiftAssignments extends Model {
    @PrimaryKey
    @ForeignKey(() => Shifts)
    @Column
    shiftId: number

    @PrimaryKey
    @ForeignKey(() => Assignments)
    @Column
    assignmentId: number
}