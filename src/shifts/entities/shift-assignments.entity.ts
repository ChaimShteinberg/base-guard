import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Shifts } from "./shifts.entity";
import { Assignments } from "src/assignments/assignments.entity";

@Table({
    timestamps: false
})
export class ShiftAssignments extends Model {
    @ForeignKey(() => Shifts)
    @Column
    shiftId: number

    @ForeignKey(() => Assignments)
    @Column
    assignmentId: number
}