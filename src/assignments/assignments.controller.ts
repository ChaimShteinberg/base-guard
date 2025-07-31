import { Controller, Get } from "@nestjs/common";
import { AssignmentsService } from "./assignments.service";
import { Assignments } from "./assignments.entity";

// import { Body, Controller, Get, Param, Post } from '@nestjs/common';
// import { Assignment } from './IAssignments';
// import { addDto } from './add.dto';

@Controller('assignments')
export class AssignmentsController {
    constructor(private readonly assignmentsService: AssignmentsService) { }
    @Get()
    async getAllAssignments(): Promise<Assignments[]> {
        return await this.assignmentsService.findAllAssignments();
    }

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
}
