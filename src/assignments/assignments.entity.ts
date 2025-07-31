import { Column, Model, Table } from "sequelize-typescript";

@Table
export class Assignments extends Model{
@Column({
    primaryKey: true, 
    autoIncrement: true,
})
assignmentId: number;

@Column
assignment: string
}