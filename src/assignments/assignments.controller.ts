// import { Body, Controller, Get, Param, Post } from '@nestjs/common';
// import { Assignment } from './IAssignments';
// import { AssignmentsService } from './assignments.service';
// import { addDto } from './add.dto';

// @Controller('assignments')
// export class AssignmentsController {
//     constructor(private assignmentsService: AssignmentsService) { }
//     @Get()
//     getAssignments(): Assignment[] {
//         return this.assignmentsService.getAll();
//     }

//     @Get(':id')
//     findOne(@Param('id') id: string): Assignment | Error {
//         const assignment = this.assignmentsService.findOne(Number(id));
//         if (!assignment) {
//             throw new Error("assignment not found");
//         }
//         return assignment;
//     }

//     @Post()
//     addAssignments(@Body() assignment: addDto): void {
//         this.assignmentsService.addAssignments(assignment.assignment)
//     }
// }
