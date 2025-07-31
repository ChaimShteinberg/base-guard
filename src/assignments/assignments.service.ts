import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Assignments } from "./assignments.entity";
// import { Assignment } from './IAssignments';

@Injectable()
export class AssignmentsService {
    constructor(
        @InjectModel(Assignments)
        private assignmentsModel: typeof Assignments
    ) { }

    async findAllAssignments(): Promise<Assignments[]> {
        return await this.assignmentsModel.findAll()
    }

    async findAssignmentById(id: number): Promise<Assignments | null> {
        return await this.assignmentsModel.findOne({ where: { assignmentId: id } })
    };

    //     addAssignments(assignment: string): void {
    //         const newAssignment: Assignment = {
    //             id: this.assignments[this.assignments.length - 1].id + 1,
    //             assignment: assignment
    //         }
    //         this.assignments.push(newAssignment)
    //     }
}
