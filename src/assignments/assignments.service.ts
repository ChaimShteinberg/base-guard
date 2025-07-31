import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Assignments } from "./assignments.entity";

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

    async CreateAssignments(assignment: string): Promise<void> {
        await this.assignmentsModel.create({ assignment })
    }
}
