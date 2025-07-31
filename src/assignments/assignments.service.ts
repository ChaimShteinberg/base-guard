import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Assignments } from "./assignments.entity";
// import { Assignment } from './IAssignments';

@Injectable()
export class AssignmentsService {
    constructor(
        @InjectModel(Assignments)
        private assignmentsModel: typeof Assignments
    ) {}
//     private assignments: Assignment[] = [
//         {
//             id: 1,
//             assignment: "assignment1"
//         },
//         {
//             id: 2,
//             assignment: "assignment2"
//         }
//     ];

    async findAllAssignments(): Promise<Assignments[]> {
        return await this.assignmentsModel.findAll()
    }

//     findOne(id: number): Assignment | undefined {
//         return this.assignments.find(assignment => assignment.id === id);
//     };

//     addAssignments(assignment: string): void {
//         const newAssignment: Assignment = {
//             id: this.assignments[this.assignments.length - 1].id + 1,
//             assignment: assignment
//         }
//         this.assignments.push(newAssignment)
//     }
}
