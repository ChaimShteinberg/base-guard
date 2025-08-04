import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { AssignmentsService } from "./assignments.service";
import { Assignments } from "./assignments.entity";
import { createAssignmentsDto } from "./createAssignments.dto";
import { Roles } from "src/common/guards/roles.decorator";
import { RolesGuard } from "src/common/guards/roles.guard";

@Controller('assignments')
@UseGuards(RolesGuard)
export class AssignmentsController {
    constructor(private readonly assignmentsService: AssignmentsService) { }
    @Get()
    @Roles("commander")
    async getAllAssignments(): Promise<Assignments[]> {
        return await this.assignmentsService.findAllAssignments();
    }

    @Get(':id')
    @Roles("commander")
    async getAssignmentById(@Param('id') id: string): Promise<Assignments | Error> {
        const assignment = await this.assignmentsService.findAssignmentById(Number(id));
        if (!assignment) {
            throw new Error("assignment not found");
        }
        return assignment;
    }

    @Post()
    @Roles("commander")
    async createAssignments(@Body() assignment: createAssignmentsDto): Promise<void> {
        await this.assignmentsService.CreateAssignments(assignment.assignment)
    }
}
