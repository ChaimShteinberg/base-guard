import { Column, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Shifts } from "./shifts.entity";
import { Users } from "src/users/users.entity";

@Table({
    timestamps: false
})
export class ShiftSoldiers extends Model<Shifts, Partial<Shifts>> {
    @PrimaryKey
    @ForeignKey(() => Shifts)
    @Column
    shiftId: number

    @PrimaryKey
    @ForeignKey(() => Users)
    @Column
    soldierId: number
}