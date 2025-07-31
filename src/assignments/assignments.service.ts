// import { Injectable } from '@nestjs/common';
// import { Assignment } from './IAssignments';

// @Injectable()
// export class AssignmentsService {
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

//     getAll(): Assignment[] {
//         return this.assignments;
//     }

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
// }
