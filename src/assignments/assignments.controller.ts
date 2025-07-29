import { Controller, Get } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
    @Get()
    getAssignments():string{
        return 'assignments';
    }
}
