import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Shifts } from "./shifts.entity";
import { Users } from "src/users/users.entity";

@Table
export class ShiftSoldiers extends Model {
    @ForeignKey(() => Shifts)
    @Column
    shiftId: number

    @ForeignKey(() => Users)
    @Column
    soldierId: number
}